/*
    <If test={exp}
*/

export default props =>{
    if(props.test){
        return props.children
    }else{
        return false
    }
}