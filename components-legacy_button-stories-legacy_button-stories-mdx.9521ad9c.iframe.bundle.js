"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7284],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/components/legacy_button/stories/legacy_button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>legacy_button_stories,legacyButton:()=>legacyButton});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),src=__webpack_require__("./packages/components/button/src/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["variant","sizeVariant","children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var AnchorSizeMapping={default:"l",small:"s",inline:"s"},AnchorColorSchemeMapping={primary:"primary",secondary:"basic"},LegacyButton=function LegacyButton(_ref){var variant=_ref.variant,_ref$sizeVariant=_ref.sizeVariant,sizeVariant=void 0===_ref$sizeVariant?"default":_ref$sizeVariant,children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);if("link"===variant)return(0,jsx_runtime.jsx)(src.A,_objectSpread(_objectSpread({},props),{},{children}));var mappedSize=AnchorSizeMapping[sizeVariant],mappedColorScheme=AnchorColorSchemeMapping[variant];return(0,jsx_runtime.jsx)(src.z,_objectSpread(_objectSpread({size:mappedSize,colorScheme:mappedColorScheme},props),{},{children}))};LegacyButton.displayName="LegacyButton";try{LegacyButton.displayName="LegacyButton",LegacyButton.__docgenInfo={description:"",displayName:"LegacyButton",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"link"'},{value:'"primary"'},{value:'"secondary"'}]}},sizeVariant:{defaultValue:{value:"default"},description:"",name:"sizeVariant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"inline"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"Gap<0 | (string & {})>"}},listStyle:{defaultValue:null,description:"",name:"listStyle",required:!1,type:{name:"ListStyleType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/legacy_button/src/legacy_button.tsx#LegacyButton"]={docgenInfo:LegacyButton.__docgenInfo,name:"LegacyButton",path:"packages/components/legacy_button/src/legacy_button.tsx#LegacyButton"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>(0,jsx_runtime.jsx)(LegacyButton,{...args});const legacyButton=Template.bind({});legacyButton.storyName="LegacyButton",legacyButton.args={children:"LegacyButton"},legacyButton.parameters={storySource:{source:"args => {\n  return <LegacyButton {...args} />;\n}"}};const componentMeta={title:"anchor-ui-compat / LegacyButton",parameters:{layout:"centered",controls:{include:["variant","sizeVariant"]}},component:LegacyButton,tags:["stories-mdx"],includeStories:["legacyButton"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"anchor-ui-compat / LegacyButton",component:LegacyButton,parameters:{layout:"centered",controls:{include:["variant","sizeVariant"]}}}),"\n","\n",(0,jsx_runtime.jsx)(_components.h1,{id:"legacybutton",children:"LegacyButton"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The LegacyButton component provides a compatability bridge to migrate existing\napplications to use AnchorUI incrementally. It maps the size and color scheme\nvariants used in legacy components to the new AnchorUI equivalents."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-javascript",children:'import { LegacyButton } from "@buoysoftware/anchor-ui-compat";\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"LegacyButton",args:{children:"LegacyButton"},children:Template.bind({})})})]})}}};const legacy_button_stories=componentMeta}}]);