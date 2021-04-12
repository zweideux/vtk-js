import { VtkAlgorithm, VtkObject } from 'vtk.js/Sources/macro';
import vtkPlane from 'vtk.js/Sources/Common/DataModel/Plane';

/**
 * 
 */
interface IAbstractMapperInitialValues {
	clippingPlanes?: vtkPlane[];
}

type vtkAlgorithm = VtkObject & Omit<VtkAlgorithm,
    'getOutputData' |
    'getOutputPort'> ;

export interface vtkAbstractMapper extends vtkAlgorithm {

    /**
     * Added plane needs to be a vtkPlane object.
     * @param {vtkPlane} plane
     */
    addClippingPlane(plane: vtkPlane): void;

    /**
     * Get number of clipping planes.
     * @return {Number} The number of clipping planes.
     */
    getNumberOfClippingPlanes(): number;

    /**
     * Get all clipping planes.
     * @return {vtkPlane[]} An array of the clipping planes objects
     */
    getClippingPlanes(): vtkPlane[];

    /**
     * Remove all clipping planes.
     */
    removeAllClippingPlanes(): void;

    /**
     * Remove clipping plane at index i.
     * @param {Number} i 
     */
    removeClippingPlane(i: number): void;

    /**
     * Set clipping planes.
     * @param {vtkPlane[]} planes
     */
    setClippingPlanes(planes: vtkPlane[]): void;

    /**
     * 
     */
    update(): void;
}

/**
 * Method use to decorate a given object (publicAPI+model) with vtkAbstractMapper characteristics.
 *
 * @param publicAPI object on which methods will be bounds (public)
 * @param model object on which data structure will be bounds (protected)
 * @param {IAbstractMapperInitialValues} [initialValues] (default: {})
 */
export function extend(publicAPI: object, model: object, initialValues?: IAbstractMapperInitialValues): void;

/**
 * vtkAbstractMapper is an abstract class to specify interface between data and
 * graphics primitives or software rendering techniques. Subclasses of
 * vtkAbstractMapper can be used for rendering 2D data, geometry, or volumetric
 * data.
 */
export declare const vtkAbstractMapper: {
    extend: typeof extend,
};
export default vtkAbstractMapper;