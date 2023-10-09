import style from "../footer/footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={style.footer}>
        <section className={style.adresse}>
          <h6>Adresse</h6>
          <p>Intet nyt - Godt nyt AsP</p>
          <p>
            Tulipanvej 232 <br /> 7320 <br /> Valby Øster
          </p>
        </section>
        <section className={style.links}>
          <h6>Links</h6>
          <a href="#">vikanweb.dk</a>
          <a href="#">overpådenandenside.dk</a>
          <a href="#">retsinformation.dk</a>
          <a href="#">nogetmednews.dk</a>
        </section>
        <section className={style.politik}>
          <h6>Politik</h6>
          <a href="#">Privatlivspolitik</a>
          <a href="#">Cookiepolitik</a>
          <a href="#">Købsinformation</a>
          <a href="#">Delingspolitik</a>
        </section>
        <section className={style.kontakt}>
          <h6>Kontakt</h6>
          <p>
            Email: ingn@nyhed.dk <br />
            Telefon: 23232323 <br />
            Fax: 123123-333
          </p>
        </section>
      </div>
    </footer>
  );
};
