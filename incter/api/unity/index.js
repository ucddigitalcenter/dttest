export const index = {
  // localrotation Unity转obv 给定角度直接旋转，pos:旋转前的target，rot:setproperty的rotation
  localrot(pos, rot) {
    var posx = localrotx(pos, rot.x);
    var posy = localroty(posx, rot.y);
    var posz = localrotz(posy, rot.z);
    console.log(posz);
    return posz;
  },
  //绕x轴旋转
  localrotx(pos1, angle) {
    var pos = new vector3();
    pos.x = pos1.x;
    pos.y = pos1.y * Math.cos(angle) - Math.sin(angle) * pos1.z;
    pos.z = Math.sin(angle) * pos1.y + Math.cos(angle) * pos1.z;
    return pos;
  },
  //绕y轴旋转
  localroty(pos1, angle) {
    var pos = new vector3();
    pos.x = pos1.x * Math.cos(angle) + pos1.z * Math.sin(angle);
    pos.y = pos1.y;
    pos.z = -Math.sin(angle) * pos1.x + Math.cos(angle) * pos1.z;
    return pos;
  },
  //绕z轴旋转
  localrotz(pos1, angle) {
    var pos = new vector3();
    pos.x = pos1.x * Math.cos(angle) - pos1.y * Math.sin(angle);
    pos.y = Math.sin(angle) * pos1.x + Math.cos(angle) * pos1.y;
    pos.z = pos1.z;
    return pos;
  },
  //unity rotation转localrotation
  rot(pos, rot) {
    var posz = rotz(pos, rot.z);
    var posy = roty(posx, rot.y);
    var posx = rotx(posy, rot.x);
    console.log(posx);
    return posx;
  },
  //绕x轴旋转
  rotx(pos1, angle) {
    var pos = new vector3();
    pos.x = pos1.x;
    pos.y = pos1.y * Math.cos(angle) + Math.sin(angle) * pos1.z;
    pos.z = -Math.sin(angle) * pos1.y + Math.cos(angle) * pos1.z;
    return pos;
  },
  //绕y轴旋转
  roty(pos1, angle) {
    var pos = new vector3();
    pos.x = pos1.x * Math.cos(angle) - pos1.z * Math.sin(angle);
    pos.y = pos1.y;
    pos.z = Math.sin(angle) * pos1.x + Math.cos(angle) * pos1.z;
    return pos;
  },
  //绕z轴旋转
  rotz(pos1, angle) {
    var pos = new vector3();
    pos.x = pos1.x * Math.cos(angle) + pos1.y * Math.sin(angle);
    pos.y = -Math.sin(angle) * pos1.x + Math.cos(angle) * pos1.y;
    pos.z = pos1.z;
    return pos;
  },
};
class vector3 {
  x = 0;
  y = 0;
  z = 0;
}
