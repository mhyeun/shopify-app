import { Layout, Page, EmptyState } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
        <TitleBar
          primaryAction={{
            content: "Select products",
            onAction: () => this.setState({ open: true })
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={resources => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <Layout>
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: "Select products",
              onAction: () => this.setState({ open: true })
            }}
            image={img}
          >
            <p>Select products to change their price temporarily.</p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }
  handleSelection = resources => {
    // for now, just console log.
    // in future, interact with db using these ids
    const idsFromResources = resources.selection.map(product => product.id);
    this.setState({ open: false });
    console.log(idsFromResources);
  };
}

export default Index;
