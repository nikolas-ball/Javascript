//scratch 3

//edabit 'very easy'
function owofied(sentence) {
  let sentenceArr = sentence.split('');
	for(let i = 0; i <= sentenceArr.length; i++){
	  if(sentenceArr[i] === 'i'){
		sentenceArr[i] = 'wi';
	  }
      if(sentenceArr[i] === 'e'){
        sentenceArr[i] = 'we';
      }
	}
  let final = sentenceArr.join('');
  let fixedFinal = final + ' owo';
  return fixedFinal;
}

Test.assertEquals(owofied("I'm gonna ride 'til I can't no more"), "I'm gonna rwidwe 'twil I can't no morwe owo")
Test.assertEquals(owofied("Do you ever feel like a plastic bag"), "Do you wevwer fwewel lwikwe a plastwic bag owo")
Test.assertEquals(owofied("Cause baby you're a firework"), "Causwe baby you'rwe a fwirwework owo")
Test.assertEquals(owofied("Never gonna give you up"), "Nwevwer gonna gwivwe you up owo")
Test.assertEquals(owofied("We've known each other for so long"), "Wwe'vwe known weach othwer for so long owo")
Test.assertEquals(owofied("Never gonna let you down"), "Nwevwer gonna lwet you down owo")
Test.assertEquals(owofied("Shine bright like a diamond"), "Shwinwe brwight lwikwe a dwiamond owo")

//=========================================================================================================================
