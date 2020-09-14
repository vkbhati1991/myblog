import React, { useState, useEffect } from 'react';
import BlogCategory from '../BlogDetail/BlogCategory';
import TagCloud from '../BlogDetail/TagCloud';
import Follow from '../BlogDetail/Follow';
import API from '../../../../api';

const CompDetail = (props) => {

  const [activeTab, setActiveTab] = useState(0);
  const [activeTabData, setActiveTabData] = useState(null);
  const { pageModel } = props;
  const { componentList, tags } = pageModel;

  useEffect(() => {
    if (componentList && componentList.length > 0) {
      const data = componentList[activeTab];
      setActiveTabData(data);

    }
  }, [activeTab]);

  if (!activeTabData) return null;

  return (
    <div className="comp-detail bt b--light-gray">
      <div className="grd-row comp-detail-row">
        <div className="grd-col-2 comp-detail-row__side-nav pb-40 ">{compDetailLeft(props, activeTab, setActiveTab)}</div>
        <div className="grd-col-8 comp-detail-row__code bl br b--light-gray pa-12">
          <div className="comp-detail-code pa-12">
            <div className="mainborad">
              <img src={`${API.URL}/images/add.png`} />
            </div>
            <h1>{activeTabData.title}</h1>
            <div className="main-code-area lh-copy f16">
              <div dangerouslySetInnerHTML={{ __html: activeTabData.content }} />
            </div>
          </div>
        </div>
        <div className="grd-col-2 comp-detail-row__add ph-12 pv-24">
          <div className="mainBoard-vert"><img src={`${API.URL}/images/v-add.png`} /></div>
          <BlogCategory />
          <TagCloud tags={tags}/>
          <Follow />
        </div>

      </div>
    </div>
  );
};

const compDetailLeft = (props, activeTab, setActiveTab) => {

  const { pageModel } = props;
  const { component, componentList } = pageModel;

  return (
    <div className="comp-detail-tech-group ">
      <h2 className="comp-detail-tech ph-16 pt-24 pb-12 f20 ff-bold">{component.title}</h2>
      {getComponentList(componentList, activeTab, setActiveTab)}
    </div>
  );
};

const getComponentList = (componentArray, activeTab, setActiveTab) => {
  if (!componentArray || componentArray.length <= 0) return;

  return componentArray.map((c, i) => {

    const classvalue = 'comp-detail-tech-link pointer db mt-16 ph-16 f16 ff-medium lh-title primary';
    const isActiveclassvalue = 'comp-detail-tech-link pointer db mt-16 ph-16 f16 ff-bold lh-title brand';
    const applyClass = activeTab === i ? isActiveclassvalue : classvalue;

    return (

      <a key={i} className={applyClass} onClick={() => { setActiveTab(i); }}>
        {c.title}
      </a>
    );
  });
};

export default CompDetail;