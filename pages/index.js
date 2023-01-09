import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import FormatDate from "../components/dateHelpers/date";
import Toolbar from "../components/toolbar/toolbar";

const name = "Daniel";

export default function Home() {
  return (
    <div className={utilStyles.container}>
      <Toolbar></Toolbar>
      <br />
      <br />
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <FormatDate dateString="2023-01-02" />
        </section>
        <br />
        <section className={utilStyles.headingMd}>
          <p>
            Hello, I'm <b>{name}</b>. I'm a software engineer that enjoys
            problem solving. This is my portfolio.
          </p>
        </section>
        <br />
        <section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel dolor
          id mauris tempor ullamcorper sit amet volutpat turpis. Pellentesque
          porta volutpat eros et dictum. Phasellus molestie efficitur ante ac
          malesuada. Aenean bibendum ultrices tempus. Vestibulum laoreet purus
          mi, in imperdiet est fringilla eget. Morbi ut ante ornare, gravida
          nibh volutpat, gravida eros. Morbi bibendum pretium tellus ac rhoncus.
          Quisque mauris orci, hendrerit in dignissim a, lacinia non magna.
          Mauris a lectus vel urna ornare euismod. Donec eget velit rutrum,
          condimentum nulla in, maximus mauris. Curabitur elementum metus sed
          quam bibendum, et mollis metus semper. Etiam laoreet tellus risus, vel
          pretium erat eleifend vel. Pellentesque facilisis accumsan eros, eu
          elementum ligula volutpat ac. Etiam sit amet aliquam mauris.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Fusce lacinia pellentesque iaculis. Sed
          blandit pellentesque dui nec dignissim. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean
          gravida neque id turpis vestibulum, in elementum purus tincidunt. Nunc
          varius aliquam nisl, quis faucibus turpis imperdiet a. Donec in
          pretium odio. Phasellus porta, nulla id bibendum rhoncus, erat sem
          lobortis libero, quis pellentesque velit mauris non magna. Nullam vel
          ex in dui pulvinar dictum et quis mi. Nunc turpis sapien, posuere ut
          nibh ac, commodo accumsan nulla. Nulla tincidunt quis erat id
          condimentum. Phasellus id metus sodales, sodales urna et, pharetra
          lacus. In eleifend metus id tortor varius, vitae placerat magna
          dictum. Donec a cursus quam. Donec eget ex egestas, pharetra ex a,
          volutpat lorem. Nunc eleifend justo vel elit auctor, et euismod tortor
          porttitor. Nulla ultricies nulla sed est posuere, bibendum feugiat
          erat dapibus. Nulla convallis nulla eu odio pharetra varius. Nulla
          aliquam metus ac ipsum imperdiet pharetra. Donec vitae efficitur
          massa, eu accumsan dolor. Duis efficitur varius nisl. Phasellus
          ultrices, mi in accumsan congue, ipsum lectus tempor massa, ac
          condimentum purus lorem eu ipsum. Aenean mattis congue tortor, vitae
          egestas erat. Cras eros dui, iaculis id purus in, rhoncus viverra
          velit. Quisque sit amet condimentum massa. Sed a arcu sagittis,
          volutpat enim eu, tristique ligula. Morbi lorem mi, maximus vitae
          lectus auctor, posuere faucibus mi. Sed tristique purus vel vulputate
          ornare. In consectetur felis non augue imperdiet pellentesque sed quis
          massa. Mauris id porta tellus. Pellentesque suscipit leo ut
          consectetur vulputate. Integer vel mi nec nulla sagittis consectetur
          id non massa. Aenean nec lacus placerat, condimentum lacus ac, feugiat
          metus. Sed molestie ligula eget orci porttitor iaculis. Donec non
          ultrices tortor, rutrum sodales lacus. Nulla posuere pellentesque
          turpis ut aliquam. Morbi lobortis libero ut tempor auctor.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Curabitur posuere leo eu massa imperdiet, sed
          efficitur quam euismod. Curabitur quis metus ultricies, pretium erat
          sed, semper erat. Integer consectetur, arcu eu ultrices fringilla, est
          neque volutpat lorem, eu blandit nisi quam a augue. Vestibulum
          pulvinar massa urna, consequat condimentum sem ultrices at. Quisque
          vestibulum eu mauris feugiat feugiat. Aliquam erat volutpat.
          Suspendisse ipsum nisl, viverra vel augue at, ultricies fermentum
          quam. In quis iaculis sem. Pellentesque vitae magna pharetra, tempor
          nunc eget, pulvinar neque. Pellentesque id posuere quam. Nullam
          euismod tristique dolor, id ullamcorper nulla. Vestibulum sed turpis a
          ante facilisis elementum pretium ut lorem. Sed vehicula lacus quis
          risus blandit, sed commodo dolor malesuada. Quisque dolor lacus,
          scelerisque et nibh auctor, euismod maximus orci. Duis iaculis
          interdum sem sit amet convallis. Nulla sodales nunc ultrices est
          luctus, dapibus rhoncus tortor varius. Sed sed nisi a mi tempor
          fermentum. Nullam sagittis mi mi, quis feugiat felis ullamcorper
          porttitor. Donec quis fringilla velit. Duis in blandit nisi. Curabitur
          vel diam orci. Mauris luctus, nisl a luctus rutrum, augue quam
          facilisis ante, at varius arcu risus vel sapien. Sed dictum felis eget
          tellus venenatis suscipit. Etiam orci leo, pharetra aliquam laoreet
          et, vehicula vitae dui. Proin vitae elementum neque, ut hendrerit ex.
          Aliquam sit amet posuere elit. Cras mollis, arcu quis laoreet congue,
          lorem velit egestas nisl, in luctus diam leo blandit nunc. Aliquam
          rutrum quis sem quis sodales. Fusce varius laoreet est, a pharetra
          dolor vehicula in. Mauris dui massa, rhoncus eu odio a, gravida
          gravida est. Donec elementum magna nisi, ac lobortis massa condimentum
          eu. Nullam consequat diam eu leo egestas dictum. Maecenas sed dapibus
          turpis. Cras vulputate dui leo, at malesuada enim pharetra ac.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Curabitur eget pharetra quam. Vestibulum
          venenatis pulvinar leo, eu suscipit diam egestas vitae. Vestibulum
          varius, neque in sodales tristique, nisi sem condimentum libero, ac
          finibus leo mauris vitae tellus. Aliquam erat volutpat. Cras pharetra
          nibh feugiat, accumsan justo eu, tempor mauris. Fusce quis bibendum
          lectus. Phasellus in enim molestie, rutrum dui ut, suscipit mi.
          Aliquam sed tincidunt lacus, at scelerisque urna. Aliquam volutpat
          pharetra nisl vel suscipit. Vivamus pulvinar lacus urna, nec dictum
          quam venenatis id. Duis iaculis cursus odio, id blandit ex faucibus
          at. Nulla tincidunt pretium ligula, sit amet efficitur nisi facilisis
          in. Donec eget est finibus, luctus ligula tincidunt, efficitur tortor.
          Nam sed magna id augue faucibus aliquet eu eu nunc. Cras finibus nibh
          sollicitudin, dignissim lorem id, pulvinar sapien. Curabitur in tortor
          nec urna commodo posuere. Vestibulum facilisis aliquam metus ac
          commodo. Pellentesque hendrerit cursus ligula, ut sollicitudin leo
          faucibus non. Donec cursus, augue eu bibendum auctor, eros urna
          tincidunt lorem, vel imperdiet nunc urna in sapien. Duis lacinia, nibh
          a tristique euismod, tortor sapien semper ante, nec accumsan sem nunc
          ut orci. Nullam porttitor dictum justo tristique suscipit. Sed
          vehicula lacus at libero lobortis cursus. Vivamus non metus ut nulla
          laoreet aliquam vitae a odio. Duis ac scelerisque quam. Ut commodo
          augue nunc, vitae dapibus elit volutpat at. Donec eget mattis arcu.
          Sed quam orci, facilisis non metus at, facilisis vehicula sem. Mauris
          sem felis, commodo vitae malesuada et, feugiat volutpat augue. Sed vel
          sollicitudin arcu. Integer in mi metus. Sed pretium iaculis lacinia.
          Morbi aliquet enim tellus, eu consectetur ipsum tempor eget. Donec vel
          rhoncus odio, vel convallis felis. Integer ut turpis vel ex viverra
          accumsan. Proin ullamcorper est sed dolor sagittis aliquam. In
          bibendum libero massa, nec sollicitudin sem aliquet et. Donec feugiat
          a nulla sed rutrum. Etiam ac suscipit mi. Proin eget varius justo.
          Donec vel tellus et nibh semper volutpat at eu lorem. Etiam at ipsum
          libero. Donec congue nisl et fringilla luctus. Donec accumsan tellus
          mollis ultricies congue. Duis sit amet risus auctor, pretium lectus
          sit amet, facilisis turpis. Aliquam vitae justo gravida, molestie leo
          nec, maximus elit. Suspendisse ac metus accumsan, pharetra arcu a,
          imperdiet massa. Morbi mattis tincidunt ante, sed suscipit odio
          ultrices non. Nullam nulla massa, cursus malesuada diam eget, aliquet
          lobortis lorem. Vivamus sollicitudin, lorem sed auctor rhoncus, purus
          nisi tincidunt dolor, eget fermentum est sapien ac dolor. Fusce ante
          justo, sodales eget vulputate ut, maximus et est. Curabitur rutrum
          turpis lacus, non efficitur purus lobortis at. Proin et tristique
          felis. In aliquam odio in neque gravida semper quis vel purus. Duis
          ultrices quam nec efficitur scelerisque. In placerat tristique
          imperdiet. Duis vel lorem leo. Duis finibus lacinia fringilla.
          Suspendisse ultrices maximus dolor. Nam massa eros, ornare in
          tristique eu, porttitor sit amet dui. Integer porta magna nulla, eu
          pretium augue lacinia vel. Vestibulum cursus convallis vestibulum.
          Duis cursus nisl et ultricies bibendum. Suspendisse egestas sem semper
          neque cursus consequat. Integer sit amet egestas sapien, sed euismod
          nulla. Praesent elementum mi sit amet dolor sollicitudin, eget sodales
          mi fermentum. Donec sollicitudin massa egestas, accumsan lectus vitae,
          iaculis magna. Pellentesque sed tincidunt neque. Sed viverra rutrum
          ultricies. Sed ornare, est a lacinia finibus, velit nibh pharetra sem,
          vitae varius est dui non enim. Mauris at tempus nisl, quis rutrum
          mauris. Quisque semper mattis venenatis. Fusce vitae ullamcorper quam,
          id laoreet lectus. Nulla neque libero, posuere id sapien a, bibendum
          tristique nisi. Donec rhoncus sapien ut diam blandit vehicula. Cras
          feugiat dolor condimentum, dapibus leo vitae, pellentesque nunc.
          Curabitur congue metus vitae dolor posuere, et consequat mi viverra.
          Nullam facilisis, sapien eget luctus commodo, tortor felis suscipit
          erat, quis ullamcorper lorem neque non dui. Nullam a porttitor dui.
        </section>
      </Layout>
    </div>
  );
}
