// 点火率画面情報(開発)
// 上
const UPPER_HEATER_ADD = new Array(
    117, 113, 109, 105, 101, 97, 93, 89, 85, 81, 77, 68, 59, 50, 41, 32, 23, 19, 15, 11, 7, 3,
    116, 112, 108, 104, 100, 96, 92, 88, 84, 80, 77, 68, 59, 50, 41, 32, 22, 18, 14, 10, 6, 2,
    231, 224, 217, 210, 203, 196, 189, 182, 175, 168, 76, 67, 58, 49, 40, 31, 161, 154, 147, 140, 133, 126,
    230, 223, 216, 209, 202, 195, 188, 181, 174, 167, 75, 66, 57, 48, 39, 30, 160, 153, 146, 139, 132, 125,
    229, 222, 215, 208, 201, 194, 187, 180, 173, 166, 74, 65, 56, 47, 38, 29, 159, 152, 145, 138, 131, 124,
    228, 221, 214, 207, 200, 193, 186, 179, 172, 165, 73, 64, 55, 46, 37, 28, 158, 151, 144, 137, 130, 123,
    227, 220, 213, 206, 199, 192, 185, 178, 171, 164, 72, 63, 54, 45, 36, 27, 157, 150, 143, 136, 129, 122,
    226, 219, 212, 205, 198, 191, 184, 177, 170, 163, 71, 62, 53, 44, 35, 26, 156, 149, 142, 135, 128, 121,
    225, 218, 211, 204, 197, 190, 183, 176, 169, 162, 70, 61, 52, 43, 34, 25, 155, 148, 141, 134, 127, 120,
    115, 111, 107, 103, 99, 95, 91, 87, 83, 79, 69, 60, 51, 42, 33, 24, 21, 17, 13, 9, 5, 1,
    114, 110, 106, 102, 98, 94, 90, 86, 82, 78, 69, 60, 51, 42, 33, 24, 20, 16, 12, 8, 4, 0);
// U字
const U_HEATER_ADD = new Array(RATIO_U_S, RATIO_U_S + 1);

// 下
const LOWER_HEATER_ADD = new Array(
    117, 113, 109, 105, 101, 97, 93, 89, 85, 81, 77, 68, 59, 50, 41, 32, 23, 19, 15, 11, 7, 3,
    116, 112, 108, 104, 100, 96, 92, 88, 84, 80, 77, 68, 59, 50, 41, 32, 22, 18, 14, 10, 6, 2,
    231, 224, 217, 210, 203, 196, 189, 182, 175, 168, 76, 67, 58, 49, 40, 31, 161, 154, 147, 140, 133, 126,
    230, 223, 216, 209, 202, 195, 188, 181, 174, 167, 75, 66, 57, 48, 39, 30, 160, 153, 146, 139, 132, 125,
    229, 222, 215, 208, 201, 194, 187, 180, 173, 166, 74, 65, 56, 47, 38, 29, 159, 152, 145, 138, 131, 124,
    228, 221, 214, 207, 200, 193, 186, 179, 172, 165, 73, 64, 55, 46, 37, 28, 158, 151, 144, 137, 130, 123,
    227, 220, 213, 206, 199, 192, 185, 178, 171, 164, 72, 63, 54, 45, 36, 27, 157, 150, 143, 136, 129, 122,
    226, 219, 212, 205, 198, 191, 184, 177, 170, 163, 71, 62, 53, 44, 35, 26, 156, 149, 142, 135, 128, 121,
    225, 218, 211, 204, 197, 190, 183, 176, 169, 162, 70, 61, 52, 43, 34, 25, 155, 148, 141, 134, 127, 120,
    115, 111, 107, 103, 99, 95, 91, 87, 83, 79, 69, 60, 51, 42, 33, 24, 21, 17, 13, 9, 5, 1,
    114, 110, 106, 102, 98, 94, 90, 86, 82, 78, 69, 60, 51, 42, 33, 24, 20, 16, 12, 8, 4, 0);
