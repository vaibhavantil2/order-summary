export const orderGroupQuery = {
  orderGroup: {
    orders: [
      {
        allowCancellation: true,
        orderId: '908791797598-01',
        deliveryParcels: [
          {
            address: {
              addressType: 'residential',
              receiverName: 'Victor Hugo',
              state: 'RJ',
              street: 'Praia de Botafogo',
              number: '300',
              city: 'Rio de Janeiro',
              postalCode: '22250-040',
              neighborhood: 'Botafogo',
              complement: null,
              country: 'BRA',
            },
            price: 500,
            pickupFriendlyName: null,
            seller: '1',
            items: [
              {
                id: '282',
                skuName: 'Tipo 1',
                name: 'Delivery 1 SLA | 1 Tipo 1',
                price: 1200,
                listPrice: 1200,
                isGift: false,
                quantity: 1,
                attachments: [],
                bundleItems: [],
                seller: '1',
                imageUrl:
                  'http://vtexgame1.vteximg.com.br/arquivos/ids/155641-55-55/bola.jpg?v=636626686154400000',
                detailUrl: '/teste-so-delivery/p',
                measurementUnit: 'un',
                unitMultiplier: 1,
              },
            ],
            selectedSla: 'PAC',
            selectedSlaObj: {
              id: 'PAC',
              name: 'PAC',
              shippingEstimate: '8bd',
              deliveryWindow: null,
              price: 500,
              deliveryChannel: 'delivery',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                friendlyName: null,
                isPickupStore: false,
              },
            },
            shippingEstimate: '8bd',
            shippingEstimateDate: null,
            deliveryWindow: null,
            deliveryChannel: 'delivery',
            selectedSlaType: 'delivery',
          },
        ],
        pickUpParcels: [],
        takeAwayParcels: [],
        items: [
          {
            id: '282',
            skuName: 'Tipo 1',
            name: 'Delivery 1 SLA | 1 Tipo 1',
            price: 1200,
            listPrice: 1200,
            isGift: false,
            quantity: 1,
            attachments: [],
            bundleItems: [],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155641-55-55/bola.jpg?v=636626686154400000',
            detailUrl: '/teste-so-delivery/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
        ],
        sellers: [
          {
            id: '1',
            name: 'vtexgame1',
          },
        ],
        totals: [
          {
            id: 'Items',
            name: 'Total dos Itens',
            value: 1200,
          },
          {
            id: 'Discounts',
            name: 'Total dos Descontos',
            value: 0,
          },
          {
            id: 'Shipping',
            name: 'Total do Frete',
            value: 500,
          },
          {
            id: 'Tax',
            name: 'Total da Taxa',
            value: 0,
          },
        ],
        clientProfileData: {
          email: 'victorhmp@mailinator.com',
          firstName: 'Victor',
          lastName: 'Hugo',
          document: '18430995005',
          documentType: 'cpf',
          phone: '+551112340909',
        },
        paymentData: {
          transactions: [
            {
              transactionId: 'AD0E4AF970E8490A85C5BE29E1066F27',
              payments: [
                {
                  id: '39F4569C6A3440FE8CA4453DAC02CDB0',
                  paymentSystem: '6',
                  paymentSystemName: 'Boleto Bancário',
                  value: 1700,
                  installments: 1,
                  lastDigits: null,
                  group: 'bankInvoice',
                  dueDate: null,
                  url:
                    'https://homolog.meiosdepagamentobradesco.com.br/apiboleto/Bradesco?token=czh0OEhYaEdxNWtqc21JVTZKS3hIbUdudmk3YzBKbGd3d282eXpQV3JZQVM4Ri9uYzZueXdxVG1WZktyTVBHQQ..',
                  bankIssuedInvoiceBarCodePNG: null,
                  bankIssuedInvoiceBarCodeNumber:
                    '23791770900000095490001250000000081712345670',
                  bankIssuedInvoiceIdentificationNumberFormatted:
                    '23790.00124 50000.000088 17123.456703 1 77090000009549',
                },
              ],
            },
          ],
        },
        storePreferencesData: {
          countryCode: 'BRA',
          currencyCode: 'BRL',
        },
        creationDate: '2019-02-06T15:30:07.5855509Z',
        value: 1700,
      },
    ],
    totalPickUpParcels: [],
    totalDeliveryParcels: [
      {
        address: {
          addressType: 'residential',
          receiverName: 'Victor Hugo',
          state: 'RJ',
          street: 'Praia de Botafogo',
          number: '300',
          city: 'Rio de Janeiro',
          postalCode: '22250-040',
          neighborhood: 'Botafogo',
          complement: null,
          country: 'BRA',
        },
        price: 500,
        pickupFriendlyName: null,
        seller: '1',
        items: [
          {
            id: '282',
            skuName: 'Tipo 1',
            name: 'Delivery 1 SLA | 1 Tipo 1',
            price: 1200,
            listPrice: 1200,
            isGift: false,
            quantity: 1,
            attachments: [],
            bundleItems: [],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155641-55-55/bola.jpg?v=636626686154400000',
            detailUrl: '/teste-so-delivery/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
        ],
        selectedSla: 'PAC',
        selectedSlaObj: {
          id: 'PAC',
          name: 'PAC',
          shippingEstimate: '8bd',
          deliveryWindow: null,
          price: 500,
          deliveryChannel: 'delivery',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            friendlyName: null,
            isPickupStore: false,
          },
        },
        shippingEstimate: '8bd',
        shippingEstimateDate: null,
        deliveryWindow: null,
        deliveryChannel: 'delivery',
        selectedSlaType: 'delivery',
      },
    ],
    totalTakeAwayParcels: [],
  },
}
