function kangaroo(x1, v1, x2, v2) {
    if (x1 > x2) return "NO";

    let maxJumps = 10000;

    for (let jump = 0; jump <= maxJumps; jump++) {

        let finalPositionA = +x1 + +v1 * jump;
        let finalPositionB = +x2 + +v2 * jump;

        if (finalPositionA == finalPositionB) return "YES";
    }

    return "NO";
}

export default kangaroo;