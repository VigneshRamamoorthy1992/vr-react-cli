module.exports = `import { render, fireEvent, waitFor } from "@testing-library/react";
import { MockStoreValue } from "MockStoreValue";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "Store";
import placeholder from "./placeholder";

const mockValue = new MockStoreValue();
let state: any;
let store: any;

describe("placeholder.tsx", () => {
    beforeEach(() => {
      state = mockValue.storeData();
      store = configureStore(state);
    });

    test("placeholder - render", () => {
        const { getByTestId } = render(
            <Router>
              <Provider store={store}>
                <placeholder />
              </Provider>
            </Router>
          );
    });
});
`
