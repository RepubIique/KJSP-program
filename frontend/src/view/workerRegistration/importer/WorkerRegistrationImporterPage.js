import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/workerRegistration/importer/workerRegistrationImporterSelectors';
import actions from 'modules/workerRegistration/importer/workerRegistrationImporterActions';
import fields from 'modules/workerRegistration/importer/workerRegistrationImporterFields';

class WorkerRegistrationImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.workerRegistration.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [
              i18n('entities.workerRegistration.menu'),
              '/worker-registration',
            ],
            [
              i18n(
                'entities.workerRegistration.importer.title',
              ),
            ],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n(
              'entities.workerRegistration.importer.title',
            )}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default WorkerRegistrationImportPage;
