import {StoreModel} from "../models/StoreModel";
import {Map, List} from 'immutable';

/**
 * Thin wrapper of Immutable data around a single business
 * **/
export class OrderModel extends StoreModel {

    constructor(data:any = {}) {
        super(data);
    }
}