let score= JSON.parse(localStorage.getItem('score')) || {win:0,lose:0,tie:0};
    
      document.querySelector('.js-score').innerHTML=`Win:${score.win}. Lose:${score.lose}. Tie:${score.tie}.`;
      
      function updateBoard(){
        document.querySelector('.js-score').innerHTML=`Win:${score.win}.Lose:${score.lose}.Tie:${score.tie}.`;
      }
    
      function getResult(playerChoose){
        const comChoose=pickComMove();     
        let result ='';

        if (playerChoose==='scissors'){
          if (comChoose==='rock'){result='Lose';}
          else if (comChoose==='paper'){result= 'Win'}
          else if (comChoose==='scissors'){result='Tie'}
        } else
       if (playerChoose==='rock'){
          if (comChoose==='rock'){result='Tie';}
          else if (comChoose==='paper'){result= 'Lose'}
          else if (comChoose==='scissors'){result='Win'}
        } else
        if (playerChoose==='paper'){
          if (comChoose==='rock'){result='Win';}
          else if (comChoose==='paper'){result= 'Tie'}
          else if (comChoose==='scissors'){result='Lose'}
        }
        
        if (result==='Win'){score.win++}
        else if (result==='Lose'){score.lose++}
        else if (result==='Tie'){score.tie++}

        updateBoard();
        document.querySelector('.js-moves').innerHTML=`You picked ${playerChoose}-Computer picked ${comChoose}.`;
        document.querySelector('.js-resul').innerHTML=result;
        

        localStorage.setItem('score',JSON.stringify(score));
       

      }
     
      function pickComMove(){
        const comMove= Math.random();
        let comChoose= '';
        
        if (comMove >=0 && comMove<1/3){
          comChoose='rock';
        } else if (comMove>=1/3 && comMove<2/3){
          comChoose='paper';
        } else if (comMove>=2/3 && comMove<1){
          comChoose = 'scissors';
        }
        return comChoose;
      }