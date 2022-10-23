class Veiculo extends Motor {

    acelerarF() {
    document.write(this.motor + ' a milhão vruuuuuuuuuummmmmmm!!! </br>');
      }
      acelerarL() {
        document.write(this.motor + '  acelera mas come poeira!!! </br>');
        }
        acelerarFerr() {
          document.write(this.motor + ' pé na tabua para alcançar o fusca... </br>');
          }
    }
    let Fusca = new Veiculo("Fusqueta");
    Fusca.acelerarF();

    let Ferrari = new Veiculo("Ferrari");
    Ferrari.acelerarFerr();

    let Lamboriguini = new Veiculo("Lamboriguini");
    Lamboriguini.acelerarL();