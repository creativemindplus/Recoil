"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7902],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6263:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i={title:"Testing"},s=void 0,c={unversionedId:"guides/testing",id:"guides/testing",isDocsHomePage:!1,title:"Testing",description:"Testing Recoil state inside of a React component",source:"@site/docs/guides/testing.md",sourceDirName:"guides",slug:"/guides/testing",permalink:"/docs/guides/testing",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/guides/testing.md",version:"current",frontMatter:{title:"Testing"},sidebar:"docs",previous:{title:"Atom Effects",permalink:"/docs/guides/atom-effects"},next:{title:"Dev Tools",permalink:"/docs/guides/dev-tools"}},l=[{value:"Testing Recoil state inside of a React component",id:"testing-recoil-state-inside-of-a-react-component",children:[{value:"Example: Form state modified by user",id:"example-form-state-modified-by-user",children:[]}]},{value:"Testing Recoil state outside of React",id:"testing-recoil-state-outside-of-react",children:[{value:"Example: Jest unit testing selectors",id:"example-jest-unit-testing-selectors",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"testing-recoil-state-inside-of-a-react-component"},"Testing Recoil state inside of a React component"),(0,r.kt)("p",null,"It can be helpful to test Recoil state when testing a component. You can compare the new state  against expected values using this pattern. It uses a React functional component, ",(0,r.kt)("inlineCode",{parentName:"p"},"useRecoilValue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),", to observe an ",(0,r.kt)("inlineCode",{parentName:"p"},"atom"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),"'s changes and execute a callback every time the user performs an action that modifies the state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export const RecoilObserver = ({node, onChange} => {\n  const value = useRecoilValue(node);\n  useEffect(() => onChange(value), [onChange, value]);\n  return null;\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"node")),": can be an atom or a selector."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"onChange")),": this function will be called every time the state changes.")),(0,r.kt)("h3",{id:"example-form-state-modified-by-user"},"Example: Form state modified by user"),(0,r.kt)("h4",{id:"component"},"Component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import {atom, useRecoilState} from 'recoil';\n\nexport const nameAtom = atom({\n  key: 'nameAtom',\n  default: '',\n});\n\nfunction Form() {\n  const [name, setName] = useRecoilState(nameAtom);\n  return (\n    <form>\n      <input\n        data-testid=\"name_input\"\n        type=\"text\"\n        value={name}\n        onChange={(event) => setName(event.target.value)}\n      />\n    </form>\n  );\n}\n\nexport default Form;\n")),(0,r.kt)("h4",{id:"test"},"Test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import {RecoilRoot} from 'recoil';\nimport {fireEvent, render, screen} from '@testing-library/react';\n\nimport Form, {nameAtom} from './form';\nimport {RecoilObserver} from './RecoilObserver';\n\ndescribe('The form state should', () => {\n  test('change when the user enters a name.', () => {\n    const onChange = jest.fn();\n\n    render(\n      <RecoilRoot>\n        <RecoilObserver node={nameAtom} onChange={onChange} />\n        <Form />\n      </RecoilRoot>\n    );\n\n    const component = screen.getByTestId('name_input');\n\n    fireEvent.change(component, {target: {value: 'Recoil'}});\n\n    expect(onChange).toHaveBeenCalledTimes(2);\n    expect(onChange).toHaveBeenCalledWith(''); // Initial state on render.\n    expect(onChange).toHaveBeenCalledWith('Recoil'); // New value on change.\n  });\n});\n")),(0,r.kt)("h2",{id:"testing-recoil-state-outside-of-react"},"Testing Recoil state outside of React"),(0,r.kt)("p",null,"It can be useful to manipulate and evaluate Recoil selectors outside of a React context for testing.  This can be done by working with a Recoil ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"Snapshot")),".  You can build a fresh snapshot using ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshot_UNSTABLE()")," and then use that ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshot")," to evaluate selectors for testing."),(0,r.kt)("h3",{id:"example-jest-unit-testing-selectors"},"Example: Jest unit testing selectors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const numberState = atom({key: 'Number', default: 0});\n\nconst multipliedState = selector({\n  key: 'MultipliedNumber',\n  get: ({get}) => get(numberState) * 100,\n});\n\ntest('Test multipliedState', () => {\n  const initialSnapshot = snapshot_UNSTABLE();\n  expect(initialSnapshot.getLoadable(multipliedState).valueOrThrow()).toBe(0);\n\n  const testSnapshot = snapshot_UNSTABLE(({set}) => set(numberState, 1));\n  expect(testSnapshot.getLoadable(multipliedState).valueOrThrow()).toBe(100);\n})\n")))}p.isMDXComponent=!0}}]);