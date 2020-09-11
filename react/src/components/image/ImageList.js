    import React from "react";
    /*eslint-disable */
    const ImageList = (props) => {

        const getImageList = () => {
            const { pageModel } = props;

            if (!pageModel) return;

            if (!pageModel.imageList || pageModel.imageList.length <= 0) {
                return null;
            }

            return pageModel.imageList.map((img, idx) => {
                return (
                    <div onClick={() => returnFileUrl(`/uploads/${img.filename}`)} key={idx} className="ImageBox col-md-2 pa-8">
                        <img src={`/uploads/${img.filename}`} alt={img.name} />
                    </div>
                );
            });

        };


        function getUrlParam(paramName) {
            const reParam = new RegExp('(?:[\?&]|&)' + paramName + '=([^&]+)', 'i');
            const match = window.location.search.match(reParam);

            return (match && match.length > 1) ? match[1] : null;
        }


        function returnFileUrl(fileUrl) {

            const funcNum = getUrlParam('CKEditorFuncNum');
            window.opener.CKEDITOR.tools.callFunction(funcNum, fileUrl, function () {
                const dialog = this.getDialog();
                if (dialog.getName() == 'image') {
                    const element = dialog.getContentElement('info', 'txtAlt');
                    if (element)
                        element.setValue('alt text');
                }
            });
            window.close();
        }

        return (
            <div className="image-list row pa-8">
                {
                    getImageList()
                }
            </div>
        );
    };

    export default ImageList;