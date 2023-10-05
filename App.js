import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [display,setDisplay]=useState("0");
  const [operator,setOperator]=useState(null);
  const [firstValue,setFirstValue]=useState("");

  const pressHandler=(value)=>{
    if(display==="0"){
      setDisplay(value.toString());
    }
    else{
      setDisplay(display+value);
    }
  }
  const handleOperator=(operators)=>{
      if(operators==="-" && operator===null && display==="0"){
        setDisplay("-");
      }
      else{
        setDisplay("0");
      }
      setOperator(operators);
      setFirstValue(display);
      
  }
  const handlerEqual=()=>{
        const first=parseFloat(firstValue);
        const second=parseFloat(display);
        if(operator==="+"){
            let res=first+second;
            setDisplay(res.toString());
        }
        else if(operator==="-"){
          let res=first-second;
          setDisplay(res.toString());
        }
        else if(operator==="*"){
          let res=first*second;
          setDisplay(res.toString());
        }
        else if(operator==="/"){
          let res=first/second;
          setDisplay(res.toString());
        }
        setFirstValue("");
        setOperator(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{display}</Text>
      </View>
      
      <View style={styles.btns}>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={()=>{pressHandler(1)}} style={styles.btn}>
            <Text style={styles.btnText}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler(2)}} style={styles.btn}>
            <Text style={styles.btnText}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler(3)}} style={styles.btn}>
            <Text style={styles.btnText}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleOperator("/")}} style={[styles.btn,styles.operatorBtn]}>
            <Text style={[styles.btnText,styles.operatorText]}>
              /
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={()=>{pressHandler(4)}} style={styles.btn}>
            <Text style={styles.btnText}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler(5)}} style={styles.btn}>
            <Text style={styles.btnText}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler(6)}} style={styles.btn}>
            <Text style={styles.btnText}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleOperator("-")}} style={[styles.btn,styles.operatorBtn]}>
            <Text style={[styles.btnText,styles.operatorText]}>
              -
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={()=>{pressHandler(7)}} style={styles.btn}>
            <Text style={styles.btnText}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler(8)}} style={styles.btn}>
            <Text style={styles.btnText}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler(9)}} style={styles.btn}>
            <Text style={styles.btnText}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleOperator("*")}} style={[styles.btn,styles.operatorBtn]}>
            <Text style={[styles.btnText,styles.operatorText]}>
              *
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={()=>{pressHandler(0)}} style={[styles.btn,styles.zeroBtn]}>
            <Text style={styles.btnText}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleOperator("+")}} style={[styles.btn,styles.operatorBtn]}>
            <Text style={[styles.btnText,styles.operatorText]}>
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlerEqual} style={[styles.btn,{backgroundColor:"orange",paddingVertical:22,paddingHorizontal:0}]}>
            <Text style={[styles.btnText,{color:"white"}]}>
              = 
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{setDisplay("0"),setFirstValue(""),setOperator(null)}} style={[styles.btn,styles.operatorBtn,{paddingVertical:10}]}>
            <Text style={styles.btnText}>
              C
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
  },
  resultContainer:{
      flex:2,
      justifyContent:'space-between',
      marginBottom:40,
      flexDirection:'column-reverse',

  },
  resultText:{
      fontSize:34,

  },
  btns:{
    marginBottom:10,
    display:'flex',
    width:"80%"
  },
  btnContainer:{
    display:'flex',
    gap:1,
    flexDirection:"row",
    marginVertical:5
  },
  btn:{
    backgroundColor:"white",
    paddingHorizontal:10,
    paddingVertical:16,
    borderRadius:50,
    flex:1,
    margin:2
  },
  btnText:{
    color:"black",
    fontSize:34,
    textAlign:"center",
    fontWeight:400,
  },
  zeroBtn:{
    flex:2,
  },
  operatorBtn:{
      backgroundColor:'#e8e9eb',
  },
  operatorText:{
    color:"orange"
  }
});









