import artisanExemple from '../assets/artisan-exemple.jpg';
import logo from '../assets/Logo.png';

const Home = () => {
  return (
    <div className="page-container">
      <h1 className="titre-principal">Comment trouver mon artisan</h1>

      <div className="home-container">
        <h3>Étape 1.</h3>
        <p>
          Sélectionnez une des grandes familles d’artisans : Bâtiment, Services, Fabrication ou Alimentation.
        </p>

        <div className="category-wrapper">
          <button className="btn-category">
            Choisir une catégorie
            <span className="arrow-circle"></span>
          </button>

          <div className="category-list">
            <span className="blue-line"></span>
            <div className="buttons-vertical">
              <button className="btn-category-simple">Bâtiment</button>
              <button className="btn-category-simple">Services</button>
              <button className="btn-category-simple">Fabrications</button>
              <button className="btn-category-simple">Alimentation</button>
            </div>
          </div>
        </div>

        {/* Étape 2 bien alignée */}
        <div className="category-wrapper">
          <h3>Étape 2.</h3>
          <p>
            Parcourez les profils et trouvez l’artisan qui correspond à votre besoin.
          </p>

          <div className="artisan-grid">
            {[...Array(6)].map((_, index) => (
              <div className="artisan-card" key={index}>
                <img
                  src={artisanExemple}
                  alt={`Artisan ${index + 1}`}
                  className="artisan-img"
                />
                <button className="btn-profile">Artisan</button>
              </div>
            ))}
          </div>

          <div className="category-wrapper">
            <h3>Étape 3.</h3>
            <p>
              Après avoir cliqué sur l’artisan de votre choix, vous accéderez à sa fiche complète comprenant une présentation détaillée et un formulaire de contact.
            </p>

            <div className="artisan-profile">
              <img
                src={artisanExemple}
                alt="Pierre & Bois – Atelier d’ébénisterie"
                className="artisan-profile-img"
              />

              <div className="artisan-details">
                <p><strong className="artisan-title">Pierre & Bois – Atelier d’ébénisterie</strong></p>
                <p>⭐⭐⭐⭐⭐ (5/5)</p>
                <p>Spécialisé dans la création de mobilier sur mesure, restauration de meubles anciens, design contemporain</p>
                <p>Localisation : Marseille, France</p>
                <p>A propos : Atelier marseillais fondé en 2009. Créations artisanales uniques, mêlant tradition et design moderne.</p>
                <p><a href="https://www.pierreetbois.fr" target="_blank" rel="noopener noreferrer">www.pierreetbois.fr</a></p>
                <button className="btn-contact">Contacter</button>
              </div>

              <div className="arrow-long"></div>

              <div className="contact-form">
                <div className="form-header">
                  <img src={logo} alt="Logo" className="form-logo" />
                </div>

                <form className="form-contact">
                  <label htmlFor="name">Nom</label>
                  <input type="text" id="name" name="name" />

                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" name="email" />

                  <label htmlFor="subject">Objet</label>
                  <input type="text" id="subject" name="subject" />

                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4"></textarea>

                  <button type="submit" className="btn-send">Envoyer</button>
                </form>
              </div>
            </div>

            <h3>Étape 4.</h3>
            <p>
              Une fois votre message envoyé, l’artisan vous reviendra personnellement avec une réponse sous 48h. On vous laisse entre de bonnes mains
            </p>


          </div>
        </div>
 
     </div>
     
    <div className="Artisan-of-the-month">
  <h3>Artisan du mois</h3>

<div className="artisan-of-the-month">
  <h2>Artisan du mois</h2>
  <div className="artisan-grid">
    {[...Array(3)].map((_, index) => (
      <div className="artisan-card" key={index}>
      <img
                  src={artisanExemple}
                  alt={`Artisan ${index + 1}`}
                  className="artisan-img"
                />
        <h3>Artisan numero {index + 1}</h3>
     
     
     
      </div>

    ))}
  </div>
</div>


            
      </div>


    </div>

  );
};

export default Home;
