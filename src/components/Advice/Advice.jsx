import { createSignal, createResource, Show } from "solid-js";
import Button from "../Button/Button";
import Loader from "../../images/loader.svg";
import Divider from "../Divider/Divider";
import styles from "./Advice.module.scss";

const fetchAdvice = async () => {
  const res = await fetch(`https://api.adviceslip.com/advice`);
  const json = res.json();
  return json;
};

function Advice() {
  // const [loading, setLoading] = createSignal(false);
  const [advice, { mutate, refetch }] = createResource(fetchAdvice);

  const resetAndRefetch = () => {
    // setLoading(true);
    // refetch().then(() => setLoading(false));
    mutate({});
    refetch();
  };

  return (
    <Show when={advice()?.slip} fallback={<Loader />}>
      <figure className={styles.advice}>
        <figcaption className={styles.id}>
          Advice #{advice()?.slip?.id}
        </figcaption>
        <blockquote className={styles.quote}>
          &ldquo;{advice()?.slip?.advice}&rdquo;
        </blockquote>
        <Divider />
        <Button onClick={resetAndRefetch} />
      </figure>
    </Show>
  );
}

export default Advice;
