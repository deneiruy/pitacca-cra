import Account from "./Account";

function AccountList() {
  return (
    <div className="bg-primbg px-2 py-1">
      <div className="font-medium py-1 text-primtext">Accounts</div>
      <div className="grid grid-cols-3 gap-1 md:grid-cols-4 lg:grid-cols-5">
        {/* TODO: Remove placeholder accounts */}
        <Account name="Cash" value={1000.0} currency="PHP" color="bg-acc-red" />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-pink"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-purple"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-deep-purple"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-indigo"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-blue"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-light-blue"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-cyan"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-teal"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-green"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-light-green"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-lime"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-yellow"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-amber"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-orange"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-deep-orange"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-grey"
        />
        <Account
          name="Cash"
          value={1000.0}
          currency="PHP"
          color="bg-acc-blue-grey"
        />
      </div>
    </div>
  );
}

export default AccountList;