import React from "react";

import styles from "./Unit.module.scss";

const names = {
  knight_b: styles.khight_black,
  rook_b: styles.rook_black,
  bishop_b: styles.bishop_black,
  queen_b: styles.queen_black,
  king_b: styles.king_black,
  pawn_b: styles.pawn_black,

  pawn_w: styles.pawn_white,
  king_w: styles.king_white,
  queen_w: styles.queen_white,
  bishop_w: styles.bishop_white,
  rook_w: styles.rook_white,
  knight_w: styles.knight_white,
};

function Unit({ type }) {
  return <svg className={names[type]}></svg>;
}

export default Unit;
