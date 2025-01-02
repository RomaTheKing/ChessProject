import { createSlice } from "@reduxjs/toolkit";
import { setMoves, getColor, clearMoves } from "../../services/MoveManager";

const initialState = {
  tiles: [...Array(64)],
  selectedTiles: [...Array(64)],
  selectX: -1,
  selectY: -1,
};

const board = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {
    addUnit(state, action) {
      const { name, x, y } = action.payload;
      state.tiles[(y - 1) * 8 + x - 1] = name;
    },
    selectUnit(state, action) {
      const id = action.payload.y * 8 + action.payload.x - 9;
      const selectID = state.selectY * 8 + state.selectX - 9;
      if (state.selectX > 0) {
        const color = getColor(state.tiles[id]);
        const selectColor = getColor(state.tiles[selectID]);

        if (color !== selectColor) {
          if (state.selectedTiles[id]) {
            state.tiles[id] = state.tiles[selectID];
            state.tiles[selectID] = "";
          }
        }
        state.selectX = state.selectY = -1;
        clearMoves(state.selectedTiles);
      } else if (
        state.tiles[id] !== "" &&
        (state.selectX !== action.payload.x ||
          state.selectY !== action.payload.y)
      ) {
        state.selectX = action.payload.x;
        state.selectY = action.payload.y;
        setMoves({
          x: state.selectX,
          y: state.selectY,
          tiles: state.tiles,
          selectedTiles: state.selectedTiles,
          unitName: state.tiles[id],
        });
      } else {
        state.selectX = -1;
        state.selectY = -1;
        setMoves({
          x: state.selectX,
          y: state.selectY,
          tiles: state.tiles,
          selectedTiles: state.selectedTiles,
          unitName: "w",
        });
      }
    },
  },
});

export const { addUnit, selectUnit } = board.actions;
export default board.reducer;
