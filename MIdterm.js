const isValidPassword = function(password){
  if (password.value==="" 'please enter password')
  return false;
  else{
    return true;
  }
  } 
  
  
  
  const onlyCs = function(garden){
  
    def getLetterGrade(score):
      score = round(score)
      if  score >= 90: return "A"
      if  90 > score >= 80: return "B"
      if  80 > score >= 70: return "C"
      if  70 > score >= 60: return "D"
      if  60 > score: return "F"
  }

 const deleteMiddLettersAlt1=function(str){
    let result ='';
    const middle=math.floor(str.length/2);
    for (let i =0; i<str.length; i++){
      if (str.length%2===1&& i !==middle){
        else if (str.length%2===0 && i !==middle && i ! middle -1 ){
          result=result+str[i]
        }
      }
    }
    return result;
  }
  
  const centuryNumber=(year+100).toString().slice(0,-2);
  let suffix ='th';
  
  switch(centuryNumber){
    case '2':
      suffix='nd';
      break;
      case '3'
      suffix ='rd';
      break;
    case '1'
    case '21'
      suffix= 'st';
      break;
  
  
  }
  
  return centurysNumber+sufix;
  
  
  
  const getCenturies = function(years){
    const centuryStrings=[]
    for (const year of years){
      let suffix='th';
      if (year>=201&& years<301){
        suffix = 'rd';
  
      }
      else if (year>=101&& year<201){
        else if ( year>= 1&& year<100||year>=2001)
        suffix = 's';
      }
    }
    
  }

