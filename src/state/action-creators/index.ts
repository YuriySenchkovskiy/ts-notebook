import {ActionTypes} from "../action-types";
import {DeleteCellAction, InsertCellBeforeAction, MoveCellAction, UpdateCellAction} from "../actions";
import {CellTypes} from "../cell";
import {Direction} from "../actions";

export const updateCell = (id: string, content: string): UpdateCellAction => {
    return {
        type: ActionTypes.UPDATE_CELL,
        payload: {
            id,
            content,
        }
    }
};

export const deleteCell = (id: string): DeleteCellAction => {
    return {
        type: ActionTypes.DELETE_CELL,
        payload: id,
    }
};

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
    return {
        type: ActionTypes.MOVE_CELL,
        payload: {
            id,
            direction,
        }
    }
};

export const inserCellBefore = (id: string, cellType: CellTypes): InsertCellBeforeAction => {
    return {
        type: ActionTypes.INCERT_CELL_BEFORE,
        payload: {
            id,
            type: cellType,
        }
    }
};