import SpeechNarrator from 'speech-synthesizer-react'

function App() {

const text ='There are six seasons in Bangladesh. Winter is one of them. The morning in the winter is called winter morning. A winter morning is very misty and cold. In winter dew drops on grasses and trees at night. Everything is covered with dense fog. Sometimes the fog is so dense that the sun rays cannot get through it. Everything seems to be hazy from a little distance. Bird’s chirping is not heard. Cows and other animals cannot come out. In winter the nights are long and the days are short. The people get up late from the bed. Then they enjoy the winter morning in many ways. They put on warm cloth, gather straws or leaves and make fire to warm themselves. Children and old people bask in the sun. Besides, the people enjoy the winter morning happily by eating various kinds of delicious cakes, date juice, breads and other items. It may be noted that the poor suffer much in winter and the rich enjoy the winter with much pleasure. In fine, in spite of having some demerits in winter it is a pleasant morning to most of the people.'

return (
 <div className="App">

   <SpeechNarrator text={text}></SpeechNarrator>

 </div>
);
}

export default App;