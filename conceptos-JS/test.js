function frankenSplice(arr1, arr2, n) {
  let merge_arr = [];
//   let general_index = 0;
//   for (let i = 0; i < arr2.length; i++) {
//       if (i === n) {
//           for (let j = 0; j < arr1.length; j++) {
//               merge_arr[general_index] = arr1[j]
//               general_index++;
//             } 
//         } else {
//             merge_arr[general_index] = arr2[i];
//         }
//     general_index++;
//   }
    let general_index = n;
    for (let i = 0; i < n; i++) {
        merge_arr[i] = arr2[i];
    }
    
    for (let j = 0; j < arr1.length; j++) {
        merge_arr[general_index] = arr1[j];
        general_index++;
    }

    for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i]);
        merge_arr[general_index+2] = arr2[i];
    }

  console.log(merge_arr)
  return merge_arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);