import s from "./Preloader.module.css";
import preloader from "../../../assets/loading.gif";

const Preloader = () => {
    return <img className={s.preloader} src={preloader} alt="preloader"/>
};

export default Preloader;