import fetcher from './categories';
import sinon from 'sinon';
import { PassThrough } from 'stream';

describe('fetch categories from API', () => {
  setUp: () => {
    this.xhr = sinon.useFakeXMLHttpRequest();
    var requests = this.requests = [];

    this.xhr.onCreate = (xhr) => {
      requests.push(xhr);
    };
  };

  tearDown: () => {
    this.xhr.restore();
  };

  it('returns response as expected', () => {
    
  });
});
