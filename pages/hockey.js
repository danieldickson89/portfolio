import utilStyles from "../styles/utils.module.css";
import Toolbar from "../components/toolbar/toolbar";

export async function getStaticProps() {
  {
    const response = await fetch("http://localhost:3000/api/getSkaters");
    const skatersData = await response.json();

    return {
      props: {
        skatersData,
      },
    };
  }
}

export default function Hockey({ skatersData }) {
  return (
    <div className={utilStyles.container}>
      <Toolbar></Toolbar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        {skatersData.skaters.map(
          ({ id, name, offense, defense, skating, passing, shot, stick }) => (
            <div key={id}>
              {name} {offense} {defense} {skating} {passing} {shot} {stick}
            </div>
          )
        )}
      </div>
    </div>
  );
}
