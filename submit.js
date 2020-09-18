//const numLen = prompt('Enter number length', 4);
const numLen = 10;
function getRandomInt() {
  let   max = 10 ** (numLen);
  let ret = Math.floor(Math.random() * Math.floor(max));
  while (ret < max / 10)   {
    ret += Math.floor(Math.random() * Math.floor(max));
    if (ret > max) ret %= max;
  }
  return ret;
}

var kor = 0;
var biki = 0;
// alert(window.biki);
// alert(window.kor);


const Num = getRandomInt();

const element = <div> Num is {Num} </div>

function breakNum(num) {
  let ret = [];
  let i = 0;
  while (num >= 1) {
    ret[i] = Math.trunc(num % 10);
    num /= 10;
    i++;
    // if (i > 10) {
    //   break;
    // }
    //alert(i);
  }
  return ret;
}

function solve(inp) {
  let inpNum = breakNum(inp);
  let etNum = breakNum(Num);
  let used = new Array(etNum.length, 0);
  //alert('' + etNum[0] + ' ' + etNum[1] + ' ' + etNum[2] + ' ' + etNum[3]);
  //alert('' + inpNum[0] + ' ' + inpNum[1] + ' ' + inpNum[2] + ' ' + inpNum[3]);
  for (let i = 0; i < etNum.length; ++i) {
    //alert('' + etNum[i] + ' ' + inpNum[i]);
    if (etNum[i] == inpNum[i]) {
      biki+= 1;
      used[i] = 1;
    }
  }
  for (let i = 0; i < etNum.length; ++i) {
    for (let j = 0; j < etNum.length; ++j) {
      if (i == j) continue;
      if (etNum[i] == inpNum[j] && used[i] != 1) {
        kor+= 1;
        used[i] = 1;
        continue;
        //alert (i + ' ' + j);
      }
    }
  }
  //kor /= 2;
  //alert ('' + kor + ' ' + biki);
  let ret = [kor, biki];
  return ret;
}
let bull = <img src="/images/Aurochs.png"/>;
let cow = <img src="/images/cow.jfif"/>;
let bullm = [];
let cowm = [];
for (let i = 0; i < bull; ++i) {
  bullm[i] = bull;
}
for (let i = 0; i < kor; ++i) {
  cowm[i] = cow;
}

function genIm() {
  let a;
  //alert(window.biki);
  for (let i = 0; i < window.kor; i++) {
    a += <image src="/images/cow.jfif"/>;
  }
  a += <br/>;
  for (let i = 0; i < window.biki; ++i) {
    a += <image src="/images/Aurochs.png"/>;
  }
}
function showRes() {

  //ReactDOM.render(a, getElementById('res'));
}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {images: null};
    this.state = {images2: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    window.kor = 0, window.biki = 0;
    let inp = Number(this.state.value);
    let ans = solve(inp);
    //alert('' + window.kor + ' ' + window.biki);
    //const cntr = document.querySelector('#ress');
    //getIm();
    //let frm = <div> {a} </div>;
      //ReactDOM.render( frm  , cntr);
    let c = [];
    let b = [];
   for (let y = 0; y < kor; ++y)
     {
       c.push(y);
     }
     // for (let i = 0; i < kor; i++) {
     //   this.state.images += <img  src="/images/cow.jfif"/>;
     // }
   this.setState({images: c.map(image => <img  src="/images/cow.jfif" width="100" height="120"/>)});
   for (let y = 0; y < biki; ++y)
     {
       b.push(y);
     }
     // for (let i = 0; i < biki; i++) {
     //   this.state.images2 += <img  src="/images/bull.jfif"/>;
     // }
   this.setState({images2: b.map(image => <img  src="/images/Aurochs.png" width="100" height="120"/>)});
   //// ReactDOM.render(
   //   <div>
   //   {this.state.images}
   //   <br/>
   //   {this.state.images2}
   //   </div>, document.getElementById('ress')
   // )
   //const element = <div> {this.state.images} <br/> {this.state.images2} </div>;
   //ReactDOM.render(element, document.getElementById('ress'));
   event.preventDefault();
 }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        You're given a {numLen} character long number
        <br/>
          Your guess!?:
          <input type="text" value={this.state.value} onSubmit ={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <br/>
        {this.state.images}
        {this.state.images2}
      </form>

    );
  }
}
ReactDOM.render(
  <NameForm />,
  document.getElementById('output')
);




const e = React.createElement;

class AnsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return `The answer is ${Num}`;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Show answer'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(AnsButton), domContainer);
