import React, {Component, Children, Fragment} from 'react';

export class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {children, current} = this.props
    const prev = (current === 0)
      ? Children.toArray(children).length - 1
      : current - 1;
    const next = (current === 2)
      ? 0
      : current + 1;
    console.log(next)

    return (<Fragment>
      <div className="col-12 col-md-4" style={{
          textAlign: 'center'
        }}><h2>{Children.toArray(children)[prev]}</h2>
      </div>
      <div className="col-12 col-md-4" style={{
          textAlign: 'center'
        }}><h1>{Children.toArray(children)[current]}</h1>
      </div>
      <div className="col-12 col-md-4" style={{
          textAlign: 'center'
        }}><h2>{Children.toArray(children)[next]}</h2>
      </div>
    </Fragment>);
  }

}


const Frontend = () => (
    <div className="card">
      <p>
        Maître Front, sur un arbre perché, Tenait en son bec un fromage. Maître Renard, par l’odeur alléché, Lui tint à peu près ce langage : « Hé ! bonjour, Monsieur du Corbeau. Que vous êtes joli ! Que vous me semblez beau ! Sans mentir, si votre ramage Se rapporte à votre plumage, Vous êtes le Phénix des hôtes de ces bois. » A ces mots le Corbeau ne se sent pas de joie ; Et pour montrer sa belle voix, Il ouvre un large bec, laisse tomber sa proie. Le Renard s’en saisit, et dit : « Mon bon Monsieur, Apprenez que tout flatteur Vit aux dépens de celui qui l’écoute : Cette leçon vaut bien un fromage, sans doute. » Le Corbeau, honteux et confus, Jura, mais un peu tard, qu’on ne l’y prendrait plus.</p>
  </div>);

const Backend = () => (
    <div className="card">
      <p>
        Maître Back, sur un arbre perché, Tenait en son bec un fromage. Maître Renard, par l’odeur alléché, Lui tint à peu près ce langage : « Hé ! bonjour, Monsieur du Corbeau. Que vous êtes joli ! Que vous me semblez beau ! Sans mentir, si votre ramage Se rapporte à votre plumage, Vous êtes le Phénix des hôtes de ces bois. » A ces mots le Corbeau ne se sent pas de joie ; Et pour montrer sa belle voix, Il ouvre un large bec, laisse tomber sa proie. Le Renard s’en saisit, et dit : « Mon bon Monsieur, Apprenez que tout flatteur Vit aux dépens de celui qui l’écoute : Cette leçon vaut bien un fromage, sans doute. » Le Corbeau, honteux et confus, Jura, mais un peu tard, qu’on ne l’y prendrait plus.</p>
  </div>);
const DevOps = () => (
    <div className="card">
      <p>
        Maître DevOps, sur un arbre perché, Tenait en son bec un fromage. Maître Renard, par l’odeur alléché, Lui tint à peu près ce langage : « Hé ! bonjour, Monsieur du Corbeau. Que vous êtes joli ! Que vous me semblez beau ! Sans mentir, si votre ramage Se rapporte à votre plumage, Vous êtes le Phénix des hôtes de ces bois. » A ces mots le Corbeau ne se sent pas de joie ; Et pour montrer sa belle voix, Il ouvre un large bec, laisse tomber sa proie. Le Renard s’en saisit, et dit : « Mon bon Monsieur, Apprenez que tout flatteur Vit aux dépens de celui qui l’écoute : Cette leçon vaut bien un fromage, sans doute. » Le Corbeau, honteux et confus, Jura, mais un peu tard, qu’on ne l’y prendrait plus.</p>
  </div>);



export class SkillFr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1
    };
  }

  render() {
    const { current} = this.state
    return (<main className="col-12 order-md-last col-md-11" id="style-1">
      <div className="row">
        <div className="col-12">
          <div className="row align-items-center justify-content-center">
            <Title current={current}>
              <span onClick={() => {
                  this.setState({current: 0})
                }}>Back-End</span>
              <span onClick={() => {
                  this.setState({current: 1})
                }}>Front-End</span>
              <span onClick={() => {
                  this.setState({current: 2})
                }}>DevOps</span>
            </Title>
          </div>
        </div>
        <div className="col-12">
{current===0 && <Backend/>}
{current===1 && <Frontend/>}
{current===2 && <DevOps/>}


      </div>
      </div>
    </main>);
  }
}
