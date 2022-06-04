import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';

import { ChannelUserComponent } from './pages/channel-user/channel-user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChannelUserEditComponent } from './pages/channel-user/channel-user-edit/channel-user-edit.component';
import { OpreatorUserComponent } from './pages/opreator-user/opreator-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileManagementComponent } from './pages/profile-management/profile-management.component';
import { CommisonProfileComponent } from './pages/commison-profile/commison-profile.component';
import { TransferControlProfileComponent } from './pages/transfer-control-profile/transfer-control-profile.component';
import { BulkCategoryProfileComponent } from './pages/bulk-category-profile/bulk-category-profile.component';
import { ApprovalOperatorUserComponent } from './pages/approvaLevel1/operator-user/operator-user.component';
import { NewtworkStockComponent } from './pages/approvaLevel1/newtwork-stock/newtwork-stock.component';
import { LoyaltyProfileComponent } from './pages/approvaLevel1/loyalty-profile/loyalty-profile.component';
import { NetworkStockLevel2Component } from './pages/approvalLevel2/network-stock-level2/network-stock-level2.component';
import { ChannelToSubscriberComponent } from './pages/cardGroup/channel-to-subscriber/channel-to-subscriber.component';
import { PeerToPeerComponent } from './pages/cardGroup/peer-to-peer/peer-to-peer.component';
import { VoucherComponent } from './pages/cardGroup/voucher/voucher.component';
import { TransferChanneltoSubscriberComponent } from './pages/transferRules/transfer-channelto-subscriber/transfer-channelto-subscriber.component';
import { TransferPeerToPeerComponent } from './pages/transferRules/transfer-peer-to-peer/transfer-peer-to-peer.component';
import { TransferChannelToChannelComponent } from './pages/transferRules/transfer-channel-to-channel/transfer-channel-to-channel.component';
import { TransferoperatorToChannelComponent } from './pages/transferRules/transferoperator-to-channel/transferoperator-to-channel.component';
import { PromotionsComponent } from './pages/transferRules/promotions/promotions.component';
import { PeerToPeerPromotionComponent } from './pages/transferRules/peer-to-peer-promotion/peer-to-peer-promotion.component';
import { InitiateStockComponent } from './pages/networkStock/initiate-stock/initiate-stock.component';
import { InterFaceMappingComponent } from './pages/inter-face-mapping/inter-face-mapping.component';
import { CellGroupComponent } from './pages/callIdManagement/cell-group/cell-group.component';
import { CellIdComponent } from './pages/callIdManagement/cell-id/cell-id.component';
import { MessageManagementComponent } from './pages/message-management/message-management.component';
import { CosManagementComponent } from './pages/cos-management/cos-management.component';
import { ServiceTypeProductMappingComponent } from './pages/service-type-product-mapping/service-type-product-mapping.component';
import { NetworkProductMappingComponent } from './pages/network-product-mapping/network-product-mapping.component';
import { BonusBundleMappingComponent } from './pages/bonus-bundle-mapping/bonus-bundle-mapping.component';
import { STKServicesComponent } from './pages/stkservices/stkservices.component';
import { GeographicalDomainComponent } from './pages/geographical-domain/geographical-domain.component';
import { ManageServiceGroupComponent } from './pages/serviceGroupManagement/manage-service-group/manage-service-group.component';
import { AssociationReassociationComponent } from './pages/serviceGroupManagement/association-reassociation/association-reassociation.component';
import { LoyaltyAdministrationComponent } from './pages/loyaltyManagement/loyalty-administration/loyalty-administration.component';
import { NetworkPerfrenceComponent } from './pages/Perfrence/network-perfrence/network-perfrence.component';
import { ServiceCLassPrefrenceComponent } from './pages/Perfrence/service-class-prefrence/service-class-prefrence.component';
import { ControlPrefrenceComponent } from './pages/Perfrence/control-prefrence/control-prefrence.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelUserComponent,
    SidebarComponent,
    ChannelUserEditComponent,
    OpreatorUserComponent,
    DashboardComponent,
    ProfileManagementComponent,
    CommisonProfileComponent,
    TransferControlProfileComponent,
    BulkCategoryProfileComponent,
    ApprovalOperatorUserComponent,
    NewtworkStockComponent,
    LoyaltyProfileComponent,
    NetworkStockLevel2Component,
    ChannelToSubscriberComponent,
    PeerToPeerComponent,
    VoucherComponent,
    TransferChanneltoSubscriberComponent,
    TransferPeerToPeerComponent,
    TransferChannelToChannelComponent,
    TransferoperatorToChannelComponent,
    PromotionsComponent,
    PeerToPeerPromotionComponent,
    InitiateStockComponent,
    InterFaceMappingComponent,
    CellGroupComponent,
    CellIdComponent,
    MessageManagementComponent,
    CosManagementComponent,
    ServiceTypeProductMappingComponent,
    NetworkProductMappingComponent,
    BonusBundleMappingComponent,
    STKServicesComponent,
    GeographicalDomainComponent,
    ManageServiceGroupComponent,
    AssociationReassociationComponent,
    LoyaltyAdministrationComponent,
    NetworkPerfrenceComponent,
    ServiceCLassPrefrenceComponent,
    ControlPrefrenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
