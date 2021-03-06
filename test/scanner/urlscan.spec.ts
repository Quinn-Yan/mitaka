import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
const expect = chai.expect;

import "mocha";
import * as moxios from "moxios";

import { Urlscan } from "../../src/lib/scanner";

describe("Urlscan", function () {
  const subject = new Urlscan();

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest("https://urlscan.io/api/v1/scan/", {
      response: {
        result: "https://urlscan.io/entry/foo/",
      },
      status: 200,
    });

    subject.setApiKey("foo");
  });

  afterEach(() => {
    moxios.uninstall();

    subject.setApiKey(undefined);
  });

  it("should support IP type IOC", function () {
    expect(subject.supportedTypes).to.deep.equal(["ip", "domain", "url"]);
  });

  describe("#scanByIP", function () {
    it("should return a URL", async function () {
      const res = await subject.scanByIP("1.1.1.1");
      expect(res).to.equal("https://urlscan.io/entry/foo/loading");
    });
  });

  describe("#scanByDomain", function () {
    it("should return a URL", async function () {
      const res = await subject.scanByDomain("example.com");
      expect(res).to.equal("https://urlscan.io/entry/foo/loading");
    });
  });

  describe("#scanByURL", function () {
    it("should return a URL", async function () {
      const res = await subject.scanByURL("http://example.com");
      expect(res).to.equal("https://urlscan.io/entry/foo/loading");
    });
  });

  context("when apiKey is undefined", function () {
    it("should raise an error", async function () {
      subject.setApiKey(undefined);

      expect(subject.scanByURL("http://example.com")).to.be.rejectedWith(Error);
    });
  });
});
