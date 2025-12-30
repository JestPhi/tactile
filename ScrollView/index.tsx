import { ReactNode } from "react";
import styles from "./style.module.css";

interface ScrollViewProps {
  children: ReactNode;
}

const ScrollView = ({ children }: ScrollViewProps) => {
  return (
    <div className={styles.scrollView} data-component="ScrollView">
      Test
      {children}
    </div>
  );
};

export default ScrollView;
