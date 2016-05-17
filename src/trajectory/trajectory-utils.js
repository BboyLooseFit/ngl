/**
 * @file Trajectory Utils
 * @author Alexander Rose <alexander.rose@weirdbyte.de>
 */


import FramesTrajectory from "./frames-trajectory.js";
import StructureTrajectory from "./structure-trajectory.js";
import RemoteTrajectory from "./remote-trajectory.js";


function makeTrajectory( trajSrc, structure, sele ){

    var traj;

    if( trajSrc.type === "frames" || trajSrc instanceof Promise ){

        traj = new FramesTrajectory( trajSrc, structure, sele );

    }else if( !trajSrc && structure.frames ){

        traj = new StructureTrajectory( trajSrc, structure, sele );

    }else{

        traj = new RemoteTrajectory( trajSrc, structure, sele );

    }

    return traj;

};


export {
	makeTrajectory
};
