import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>MailJet</Title>

      <iframe class="mj-w-res-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/8Sp8/P5q" width="100%"></iframe>

<script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
    </main>
  );
}
