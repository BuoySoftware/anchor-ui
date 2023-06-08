"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4526],{"./packages/components/form/stories/use_conditional_field.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,useConditionalField:()=>useConditionalField});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),react_i18next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_hook_form__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/form/src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>{const form=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.cI)(),{active}=(0,_src__WEBPACK_IMPORTED_MODULE_4__.oD)({control:form.control,value:"yes",watch:"agree"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.l0,{form,id:"conditional-field-example",scope:"conditional-field-example",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.gu,{name:"agree",label:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.__,{children:"Do you agree?"}),options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}]}),active&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.nv,{Component:_src__WEBPACK_IMPORTED_MODULE_4__.Kx,name:"comment"})]})};const useConditionalField=Template.bind({});useConditionalField.storyName="useConditionalField",useConditionalField.parameters={storySource:{source:'args => {\n  const form = useForm();\n  const {\n    active\n  } = useConditionalFieldHook({\n    control: form.control,\n    value: "yes",\n    watch: "agree"\n  });\n  const options = [{\n    value: "yes",\n    label: "Yes"\n  }, {\n    value: "no",\n    label: "No"\n  }];\n  return <Form form={form} id="conditional-field-example" scope="conditional-field-example">\n      <RadioField name="agree" label={<Label>Do you agree?</Label>} options={options} />\n      {active && <TextField Component={TextArea} name="comment" />}\n    </Form>;\n}'}};const componentMeta={title:"Hooks / useConditionalField",decorators:[Story=>(i18next__WEBPACK_IMPORTED_MODULE_1__.ZP.use(react_i18next__WEBPACK_IMPORTED_MODULE_2__.Db).init({lng:"en",ns:["anchorForms","forms"],resources:{en:{anchorForms:_src__WEBPACK_IMPORTED_MODULE_4__.Nn,forms:{labels:{conditional_field_example:{comment:"Comment"}}}}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story,{}))],tags:["stories-mdx"],includeStories:["useConditionalField"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Hooks / useConditionalField",decorators:[Story=>(i18next__WEBPACK_IMPORTED_MODULE_1__.ZP.use(react_i18next__WEBPACK_IMPORTED_MODULE_2__.Db).init({lng:"en",ns:["anchorForms","forms"],resources:{en:{anchorForms:_src__WEBPACK_IMPORTED_MODULE_4__.Nn,forms:{labels:{conditional_field_example:{comment:"Comment"}}}}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story,{}))]}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.oG,{name:"useConditionalField",children:Template.bind({})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{className:"language-jsx",children:'const form = useForm();\nconst { active } = useConditionalField({\n  control: form.control,\n  value: "yes",\n  watch: "agree"\n});\n\nconst options = [\n  { value: "yes", label: "Yes" },\n  { value: "no", label: "No" }\n];\n\nreturn (\n  <Form form={form} id="conditional-field-example" scope="conditional-field-example">\n    <RadioField\n      name="agree"\n      label={<Label>Do you agree?</Label>}\n      options={options}\n    />\n    {active && (\n      <TextField Component={TextArea} name="comment" />\n    )}\n  </Form>\n);\n'})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);