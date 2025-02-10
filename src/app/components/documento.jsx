import {
  Document,
  Page,
  View,
  Text,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";

export default function Documento() {
  return (
    <PDFViewer>
      <Document>
        <Page size="A4">
          <Text>Lucas Cincunegui</Text>
        </Page>
      </Document>
    </PDFViewer>
  );
}
