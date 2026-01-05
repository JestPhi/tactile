import styles from "./style.module.css";

const Node = ({ isActive = false }) => {
  return (
    <div
      className={["h-48 w-48", styles.node, isActive && styles.active].join(
        " "
      )}
      onClick={() => {}}
    >
      Node
    </div>
  );
};

const Grid = () => {
  return (
    <div className="grid row-gap-4" data-component="Grid">
      <div className="grid column-gap-4 row-columns-repeat">
        <Node isActive />
        <Node />
        <Node />
        <Node />
        <Node />
        <Node />
      </div>
      <div className="grid column-gap-4 row-columns-repeat">
        <Node />
        <Node />
        <Node />
        <Node />
        <Node />
        <Node />
      </div>
      <div className="grid column-gap-4 row-columns-repeat">
        <Node />
        <Node />
        <Node />
        <Node />
        <Node />
        <Node />
      </div>
    </div>
  );
};

export default Grid;
