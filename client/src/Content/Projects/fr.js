import React, {Component, Children, Fragment} from "react";
import Card from "../../Components/Card";

const Frontend = () => (
  <div className="row align-items-center justify-content-center">
    test
  </div>
);

const Backend = () => (
  <div className="card">
    <p>
      Maître Back, sur un arbre perché, Tenait en son bec un fromage. Maître Renard,
      par l’odeur alléché, Lui tint à peu près ce langage : « Hé ! bonjour, Monsieur
      du Corbeau. Que vous êtes joli ! Que vous me semblez beau ! Sans mentir, si
      votre ramage Se rapporte à votre plumage, Vous êtes le Phénix des hôtes de ces
      bois. » A ces mots le Corbeau ne se sent pas de joie ; Et pour montrer sa belle
      voix, Il ouvre un large bec, laisse tomber sa proie. Le Renard s’en saisit, et
      dit : « Mon bon Monsieur, Apprenez que tout flatteur Vit aux dépens de celui qui
      l’écoute : Cette leçon vaut bien un fromage, sans doute. » Le Corbeau, honteux
      et confus, Jura, mais un peu tard, qu’on ne l’y prendrait plus.
    </p>
  </div>
);
const DevOps = () => (
  <div className="card">
    <p>
      Maître DevOps, sur un arbre perché, Tenait en son bec un fromage. Maître Renard,
      par l’odeur alléché, Lui tint à peu près ce langage : « Hé ! bonjour, Monsieur
      du Corbeau. Que vous êtes joli ! Que vous me semblez beau ! Sans mentir, si
      votre ramage Se rapporte à votre plumage, Vous êtes le Phénix des hôtes de ces
      bois. » A ces mots le Corbeau ne se sent pas de joie ; Et pour montrer sa belle
      voix, Il ouvre un large bec, laisse tomber sa proie. Le Renard s’en saisit, et
      dit : « Mon bon Monsieur, Apprenez que tout flatteur Vit aux dépens de celui qui
      l’écoute : Cette leçon vaut bien un fromage, sans doute. » Le Corbeau, honteux
      et confus, Jura, mais un peu tard, qu’on ne l’y prendrait plus.
    </p>
  </div>
);

export class ProjectFr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1
    };
  }

  render() {
    const {current} = this.state;
    return (
      <Fragment>
        <Frontend/>
      </Fragment>
    );
  }
}
