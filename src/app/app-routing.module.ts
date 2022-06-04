import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoyaltyProfileComponent } from './pages/approvaLevel1/loyalty-profile/loyalty-profile.component';
import { NewtworkStockComponent } from './pages/approvaLevel1/newtwork-stock/newtwork-stock.component';
import { ApprovalOperatorUserComponent } from './pages/approvaLevel1/operator-user/operator-user.component';
import { NetworkStockLevel2Component } from './pages/approvalLevel2/network-stock-level2/network-stock-level2.component';
import { BonusBundleMappingComponent } from './pages/bonus-bundle-mapping/bonus-bundle-mapping.component';
import { BulkCategoryProfileComponent } from './pages/bulk-category-profile/bulk-category-profile.component';
import { CellGroupComponent } from './pages/callIdManagement/cell-group/cell-group.component';
import { CellIdComponent } from './pages/callIdManagement/cell-id/cell-id.component';
import { ChannelToSubscriberComponent } from './pages/cardGroup/channel-to-subscriber/channel-to-subscriber.component';
import { PeerToPeerComponent } from './pages/cardGroup/peer-to-peer/peer-to-peer.component';
import { VoucherComponent } from './pages/cardGroup/voucher/voucher.component';
import { ChannelUserEditComponent } from './pages/channel-user/channel-user-edit/channel-user-edit.component';
import { ChannelUserComponent } from './pages/channel-user/channel-user.component';
import { CommisonProfileComponent } from './pages/commison-profile/commison-profile.component';
import { CosManagementComponent } from './pages/cos-management/cos-management.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GeographicalDomainComponent } from './pages/geographical-domain/geographical-domain.component';
import { InterFaceMappingComponent } from './pages/inter-face-mapping/inter-face-mapping.component';
import { LoyaltyAdministrationComponent } from './pages/loyaltyManagement/loyalty-administration/loyalty-administration.component';
import { MessageManagementComponent } from './pages/message-management/message-management.component';
import { NetworkProductMappingComponent } from './pages/network-product-mapping/network-product-mapping.component';
import { InitiateStockComponent } from './pages/networkStock/initiate-stock/initiate-stock.component';
import { OpreatorUserComponent } from './pages/opreator-user/opreator-user.component';
import { ControlPrefrenceComponent } from './pages/Perfrence/control-prefrence/control-prefrence.component';
import { NetworkPerfrenceComponent } from './pages/Perfrence/network-perfrence/network-perfrence.component';
import { ServiceCLassPrefrenceComponent } from './pages/Perfrence/service-class-prefrence/service-class-prefrence.component';
import { ProfileManagementComponent } from './pages/profile-management/profile-management.component';
import { ServiceTypeProductMappingComponent } from './pages/service-type-product-mapping/service-type-product-mapping.component';
import { AssociationReassociationComponent } from './pages/serviceGroupManagement/association-reassociation/association-reassociation.component';
import { ManageServiceGroupComponent } from './pages/serviceGroupManagement/manage-service-group/manage-service-group.component';
import { STKServicesComponent } from './pages/stkservices/stkservices.component';
import { TransferControlProfileComponent } from './pages/transfer-control-profile/transfer-control-profile.component';
import { TransferChannelToChannelComponent } from './pages/transferRules/transfer-channel-to-channel/transfer-channel-to-channel.component';
import { TransferChanneltoSubscriberComponent } from './pages/transferRules/transfer-channelto-subscriber/transfer-channelto-subscriber.component';
import { TransferoperatorToChannelComponent } from './pages/transferRules/transferoperator-to-channel/transferoperator-to-channel.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'channelUser',
    component: ChannelUserComponent,
  },
  { path: 'editChannelUser/:id', component: ChannelUserEditComponent },
  { path: 'operatorUser', component: OpreatorUserComponent },
  { path: 'profileManagement', component: ProfileManagementComponent },
  { path: 'commisonProfile', component: CommisonProfileComponent },
  { path: 'bulkCategoryProfile', component: BulkCategoryProfileComponent },
  {
    path: 'transferControlProfile',
    component: TransferControlProfileComponent,
  },
  {
    path: 'ApprovaloperatorUser',
    component: ApprovalOperatorUserComponent,
  },
  {
    path: 'newtworkStock',
    component: NewtworkStockComponent,
  },
  {
    path: 'loyaltyProfile',
    component: LoyaltyProfileComponent,
  },
  {
    path: 'networkStockLevel2',
    component: NetworkStockLevel2Component,
  },
  {
    path: 'channelToSubscriber',
    component: ChannelToSubscriberComponent,
  },
  {
    path: 'peerToPeer',
    component: PeerToPeerComponent,
  },
  {
    path: 'voucher',
    component: VoucherComponent,
  },
  {
    path: 'peerToPeer',
    component: PeerToPeerComponent,
  },
  {
    path: 'channelToChannel',
    component: TransferChannelToChannelComponent,
  },
  {
    path: 'opertorToChannel',
    component: TransferoperatorToChannelComponent,
  },
  {
    path: 'channelToSubscriber',
    component: TransferChanneltoSubscriberComponent,
  },
  {
    path: 'initiateStock',
    component: InitiateStockComponent,
  },
  {
    path: 'interfaceMapping',
    component: InterFaceMappingComponent,
  },
  {
    path: 'cellGroup',
    component: CellGroupComponent,
  },
  {
    path: 'cellId',
    component: CellIdComponent,
  },
  {
    path: 'messageManagement',
    component: MessageManagementComponent,
  },
  {
    path: 'cosManagement',
    component: CosManagementComponent,
  },
  {
    path: 'serviceTypeProductMapping',
    component: ServiceTypeProductMappingComponent,
  },
  {
    path: 'networkProductMapping',
    component: NetworkProductMappingComponent,
  },
  {
    path: 'bonusBundleMapping',
    component: BonusBundleMappingComponent,
  },
  {
    path: 'stkService',
    component: STKServicesComponent,
  },
  {
    path: 'geographicalDomain',
    component: GeographicalDomainComponent,
  },
  {
    path: 'manageServiceGroup',
    component: ManageServiceGroupComponent,
  },
  {
    path: 'associationReassociation',
    component: AssociationReassociationComponent,
  },
  {
    path: 'loyaltyprofileManagement',
    component: ProfileManagementComponent,
  },
  {
    path: 'loyaltyprofileAdministration',
    component: LoyaltyAdministrationComponent,
  },
  {
    path: 'networkPrefrence',
    component: NetworkPerfrenceComponent,
  },
  {
    path: 'serviceClassPrefrence',
    component: ServiceCLassPrefrenceComponent,
  },
  {
    path: 'controlPrefrence',
    component: ControlPrefrenceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
