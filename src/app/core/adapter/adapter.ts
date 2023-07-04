/**
 * This is a global adapter interface which will be implement by every adapter
 * @name Adapter 
 * @author: Mrunal Patel
 * @param T: This is of object which will responsible for binding with UI
 * @param Request: This is the request object which will used to send the data to server
 * @param Response: This is the response model of api request 
 */
export interface Adapter<T, Request = any, Response = any> {
    /**
     * This will used to convert T object into request object
     * @param item : This is T type object contains the info
     */
    toRequest?(item: T): Request;
    /**
     * This will convert the response into T object
     * @param item This is the response model from api response
     */
    toResponse?(item: Response): T;
}