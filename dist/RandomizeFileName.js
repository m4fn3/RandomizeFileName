function S(o){window.enmity.plugins.registerPlugin(o)}const a=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const b=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const u=window.enmity.modules.common.Linking,F=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function T(o){return window.enmity.patcher.create(o)}var y="RandomizeFileName",g="1.0.0a",E="test",v=[{name:"mafu",id:"519760564755365888"}],C="#bdb76b",I={name:y,version:g,description:E,authors:v,color:C};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const N=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const R=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const c=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const p=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon;const A=e.FormInput;e.FormLabel,e.FormRadio;const m=e.FormRow,h=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function d(o){return window.enmity.assets.getIDByName(o)}const x={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,t)=>window.enmity.modules.filters.byName(o,t),byTypeName:(o,t)=>window.enmity.modules.filters.byTypeName(o,t),byDisplayName:(o,t)=>window.enmity.modules.filters.byDisplayName(o,t)};function D(...o){return window.enmity.modules.bulk(...o)}function L(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;const P=d("img_account_sync_github_white"),k=d("Discord"),B=d("img_account_sync_twitter_white"),_=L("acceptInviteAndTransitionToInviteChannel");var M=({settings:o})=>{const t=F.createThemedStyleSheet({container:{flexDirection:"row",justifyContent:"center",alignItems:"center"},image:{width:70,height:70,marginTop:20,marginLeft:20},title:{flexDirection:"column"},name:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:a.ThemeColorMap.HEADER_PRIMARY},author:{fontSize:15,paddingLeft:50,color:a.ThemeColorMap.HEADER_SECONDARY},info:{height:45,paddingTop:3,paddingBottom:3,justifyContent:"center",alignItems:"center"},footer:{color:a.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",paddingTop:10,paddingBottom:20}});return n.createElement(R,null,n.createElement(p,{style:t.container},n.createElement(N,{source:{uri:"https://avatars.githubusercontent.com/u/43488869"},style:t.image}),n.createElement(p,{style:t.title},n.createElement(c,{style:t.name},"RandomizeFileName"),n.createElement(c,{style:t.author},"by mafu"))),n.createElement(h,{title:"SETTING"},n.createElement(A,{title:"Exclude extensions",placeholder:"split extensions with '|' (e.g. js|json|png)",value:o.get("exts"),onSubmitEditing:i=>{o.set("exts",i.nativeEvent.text)}})),n.createElement(h,{title:"INFORMATION"},n.createElement(m,{label:"Follow me on Twitter",style:t.info,trailing:m.Arrow,leading:n.createElement(m.Icon,{source:B}),onPress:()=>{u.openURL("https://twitter.com/m4fn3")}}),n.createElement(m,{label:"Visit my server for help",style:t.info,trailing:m.Arrow,leading:n.createElement(m.Icon,{source:k}),onPress:()=>{_.acceptInviteAndTransitionToInviteChannel({inviteKey:"TrCqPTCrdq",context:{location:"Invite Button Embed"},callback:()=>{b.pop()}})}}),n.createElement(m,{label:"Check Source on GitHub",style:t.info,trailing:m.Arrow,leading:n.createElement(m.Icon,{source:P}),onPress:()=>{u.openURL("https://github.com/m4fn3/RandomizeFileName")}})),n.createElement(c,{style:t.footer},`v${g}`))};function z(o,t,i){return window.enmity.settings.get(o,t,i)}const w=T("RandomizeFileName"),[f]=D(x.byProps("addFile")),V={...I,onStart(){function o(t){let i=t.split("."),l="",s=!1;i.length>1&&(l=`.${i[i.length-1]}`,z(y,"exts","[]").toString().split("|").includes(l.slice(1))&&(s=!0));let r=Math.random().toString(32).substring(2);return s?t:`${r}${l}`}w.after(f,"addFile",(t,i,l)=>{i[0].file.filename=o(i[0].file.filename)}),w.after(f,"addFiles",(t,i,l)=>{i[0].files.forEach((s,r)=>{i[0].files[r].filename=o(i[0].files[r].filename)})})},onStop(){w.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(M,{settings:o})}};S(V);
