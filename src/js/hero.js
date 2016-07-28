import React from 'react'

class Hero extends React.Component {
  render() {
    let { name, ctaName, ctaUrl } = this.props;
    return (
      <section id="hero">
        <div className="container text--center chamber--sides">
          <h1 className="typography--alpha font-white">My name is {name}, and I create awesome stuff!</h1>
          <p className="typography--regular">Blog tousled man bun bitters fap, retro letterpress. Try-hard truffaut raw denim brunch, plaid dreamcatcher migas messenger bag fanny pack godard man braid. YOLO distillery cardigan, brunch chia swag selfies post-ironic ennui 90's biodiesel drinking vinegar +1 small batch. Fixie kale chips leggings mustache post-ironic biodiesel, artisan tattooed.</p>
          <a href={ctaUrl} className="typography--regular cta push--down">{ctaName}</a>
        </div>
      </section>
    )
  }
}

export default Hero
