export const currentNetworkName = () => {
  const networkId = sessionStorage.getItem("currentyNetwork");
  switch (networkId) {
    case "80001":
      return "Mumbai Testnet";

    case "4":
      return "Rinkeby";

    case "5":
      return "Goerli";

    default:
      return;
    // code block
  }
};
