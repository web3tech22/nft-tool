export const findMeanRatingValue = (nftData) => {
  if (nftData?.feedback) {
    let total = 0;
    nftData?.feedback.map((val) => {
      total += val?.value;
      return null;
    });
    return total / nftData?.feedback?.length;
  }
  return 0;
};
