<CKEditor
                            config={{
                                filebrowserBrowseUrl: "/image/browse",
                                filebrowserUploadUrl: "/image/upload",
                                filebrowserUploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
                                filebrowserImageUploadUrl: '/image/upload?command=QuickUpload&type=Images',
                                filebrowserWindowWidth: "640",
                                filebrowserWindowHeight: "480",
                                scayt_autoStartup: true,
                                autoGrow_minHeight: 500,
                                autoGrow_bottomSpace: 200,
                                extraPlugins: "embed,autoembed,image2,language, mathjax, autogrow, colordialog,tableresize, codesnippet, placeholder, copyformatting,colorbutton, font",
                                codeSnippet_theme: "monokai_sublime",
                                language_list: ['hi:Hindi', 'es:English', 'ar:Arabic:rtl', 'fr:French', 'he:Hebrew:rtl', 'es:Spanish'],
                                contentsCss: [
                                    "http://cdn.ckeditor.com/4.14.1/full-all/contents.css",
                                    "https://ckeditor.com/docs/vendors/4.14.1/ckeditor/assets/css/widgetstyles.css"
                                ],
                                embed_provider: "//ckeditor.iframe.ly/api/oembed?url={url}&callback={callback}",
                                image2_alignClasses: ["image-align-left", "image-align-center", "image-align-right"],
                                image2_disableResizer: true,
                                mathJaxLib: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML",
                                coreStyles_bold: {
                                    element: "b",
                                    overrides: "strong"
                                },
                                coreStyles_italic: {
                                    element: "i",
                                    overrides: "em"
                                },
                                copyFormatting_allowedContexts: ["text"],
                                copyFormatting_allowRules: "strong;",
                                toolbarGroups: [{
                                    name: 'clipboard',
                                    groups: ['clipboard', 'undo']
                                  },
                                  {
                                    name: 'editing',
                                    groups: ['find', 'selection', 'spellchecker']
                                  },
                                  {
                                    name: 'links'
                                  },
                                  {
                                    name: 'insert'
                                  },
                                  {
                                    name: 'forms'
                                  },
                                  {
                                    name: 'tools'
                                  },
                                  {
                                    name: 'document',
                                    groups: ['mode', 'document', 'doctools']
                                  },
                                  {
                                    name: 'colors'
                                  },
                                  {
                                    name: 'others'
                                  },
                                  {
                                    name: 'about'
                                  },
                                  '/',
                                  {
                                    name: 'basicstyles',
                                    groups: ['basicstyles', 'cleanup']
                                  },
                                  {
                                    name: 'paragraph',
                                    groups: ['list', 'indent', 'blocks', 'align', 'bidi']
                                  },
                                  {
                                    name: 'styles'
                                  }
                                ],
                                format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div'
                            }}
                            onChange={onEditorChange}
                            data={content} />