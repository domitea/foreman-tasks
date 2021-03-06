import { testComponentSnapshotsWithFixtures } from 'react-redux-test-utils';

import TableSelectionCell from '../TableSelectionCell';

const fixtures = {
  'renders TableSelectionCell': {
    id: 'some id',
    label: 'some label',
    checked: true,
    onChange: jest.fn(),
  },
};

describe('TableSelectionCell', () =>
  testComponentSnapshotsWithFixtures(TableSelectionCell, fixtures));
