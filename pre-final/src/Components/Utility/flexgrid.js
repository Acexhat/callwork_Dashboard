import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
const styles = (theme) => ({
  rootColumn: {
    display: "flex",
    flexDirection: "column",
  },
  rootRow: {
    display: "flex",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  rowInColumn: {
    display: "flex",
    flexShrink: "0",
  },
  row: {
    display: "flex",
    flexGrow: 1,
  },
  columnInRow: {},
});

function renderElement(data, getComponent, classes, spacing) {
  const layoutType = data.alignment === "horizontal" ? "row" : "column";
  let nestedData;
  return (
    <div
      key={Math.random(100)}
      className={
        layoutType === "row"
          ? data.root
            ? classes.rootRow
            : classes.row
          : data.root
          ? classes.rootColumn
          : classes.column
      }
      style={{
        width: data.width,
        height: data.height,
        margin: data.root ? -spacing / 2 : "",
        // margin: data.root ? "1rem": "",
      }}
    >
      {(nestedData = data.content) &&
        nestedData.map((cardData, id) => {
          return !cardData.content ? (
            <div
              key={id}
              className={
                layoutType === "row" ? classes.columnInRow : classes.rowInColumn
              }
              style={{
                boxSizing: "border-box",
                height: cardData.height,
                width: cardData.width,
                // padding: spacing / 2,
                padding:" 0 0.8rem 0.8rem 0",
              }}
            >
              {cardData.component ? getComponent(cardData.component) : ""}
            </div>
          ) : (
            renderElement(cardData, getComponent, classes, spacing)
          );
        })}
    </div>
  );
}

function RecFlexGrid(props) {
  const { classes, getComponent, layoutConfiguration } = props;

  const spacing = layoutConfiguration.spacing;

  return renderElement(layoutConfiguration, getComponent, classes, spacing);
}

export default withStyles(styles)(RecFlexGrid);
