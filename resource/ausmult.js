
function show(xs) {
    let result = "";
    for (let i = 0; i < xs.length; i++) {
        const order = xs.length - i - 1;
        const x = xs[i];
        if (x === 0) {
            continue;
        }
        
        result += result === "" ? "" : " + ";
        if (order === 0) {
            result += x;
        } else {
            if (x !== 1) {
                result += x;
            }
            result += "x";
            if (order !== 1) {
                result += "^" + order;
            }
        }
    }
    return result;    
}

function ausmult(xs, ys) {
  const zs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
  for (let ix = 0; ix < xs.length; ix++) {
      for (let iy = 0; iy < ys.length; iy++) {
          const orderX = xs.length - 1 - ix;
          const orderY = ys.length - 1 - iy;
          const orderZ = orderX + orderY;
          const z = xs[ix] * ys[iy];
          const iz = zs.length - 1 - orderZ;
          if (zs[iz] === undefined) {
              zs[iz] = z;
          } else {
              zs[iz] += z;
          }
      }
  }
  
  console.log("(" + show(xs) + ")(" + show(ys) + ") = " + show(zs));
}
