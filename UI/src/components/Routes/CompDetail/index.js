import React from 'react';
import BlogCategory from '../BlogDetail/BlogCategory';
import TagCloud from '../BlogDetail/TagCloud';
import Follow from '../BlogDetail/Follow';

const CompDetail = (props) => {
  return (
    <div className="comp-detail bt b--light-gray">
      <div className="grd-row comp-detail-row">
        <div className="grd-col-2 comp-detail-row__side-nav pb-40 ">{compDetailLeft(props)}</div>
        <div className="grd-col-8 comp-detail-row__code bl br b--light-gray pa-12">
          <div className="comp-detail-code pa-12">
            <div className="mainborad">
              <img src="./images/add.png" />
            </div>
            <h1>How to setup React CLI from scratch</h1>
            <div className="main-code-area lh-copy f16">
              {`${1} The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. " The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.`}
            </div>
          </div>
        </div>
        <div className="grd-col-2 comp-detail-row__add ph-12 pv-24">
          <div className="mainBoard-vert"><img src="./images/v-add.png" /></div>
          <BlogCategory />
          <TagCloud />
          <Follow />
        </div>

      </div>
    </div>
  );
};

const compDetailLeft = (props) => {

  const { pageModel } = props;
  const { component } = pageModel;

  return (
    <div className="comp-detail-tech-group ">
      <h2 className="comp-detail-tech ph-16 pt-24 pb-12 f20 ff-bold">{component.title}</h2>
      <a href="/#" className="comp-detail-tech-link db mt-16 ph-16 f16 ff-medium lh-title primary">How to setup React CLI from scratch</a>
      <a href="/#" className="comp-detail-tech-link db mt-16 ph-16 f16 ff-medium lh-title primary">How to setup REST API in NODE and EXPRESS JS from scratch</a>
      <a href="/#" className="comp-detail-tech-link db mt-16 ph-16 f16 ff-bold brand lh-title">How to Create Responsive Grid from scratch</a>
      <a href="/#" className="comp-detail-tech-link db mt-16 ph-16 f16 ff-medium lh-title primary">How to setup React CLI from scratch</a>
      <a href="/#" className="comp-detail-tech-link db mt-16 ph-16 f16 ff-medium lh-title primary">How to setup REST API in NODE and EXPRESS JS from scratch</a>
      <a href="/#" className="comp-detail-tech-link db mt-16 ph-16 f16 ff-medium lh-title primary">How to Create Responsive Grid from scratch</a>
      <a href="/#" className="comp-detail-tech-link db mt-16 ph-16 f16 ff-medium lh-title primary">How to setup React CLI from scratch</a>
      <a href="/#" className="comp-detail-tech-link db mt-16 ph-16 f16 ff-medium lh-title primary">How to setup REST API in NODE and EXPRESS JS from scratch</a>
      <a href="/#" className="comp-detail-tech-link db mt-16 ph-16 f16 ff-medium lh-title primary">How to Create Responsive Grid from scratch</a>
      <a href="/#" className="comp-detail-tech-link db mt-16 ph-16 f16 ff-medium lh-title primary">How to setup React CLI from scratch</a>
      <a href="/#" className="comp-detail-tech-link db mt-16 ph-16 f16 ff-medium lh-title primary">How to setup REST API in NODE and EXPRESS JS from scratch</a>
      <a href="/#" className="comp-detail-tech-link db mt-16 ph-16 f16 ff-medium lh-title primary">How to Create Responsive Grid from scratch</a>
    </div>
  );
};

export default CompDetail;